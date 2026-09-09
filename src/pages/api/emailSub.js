export default async function (req, res) {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  try {
    // Sender.net never deletes a subscriber record when they're removed from a
    // group (only the group tag is stripped), so the subscriber-create call
    // below always returns 200 (not 201) for any email that has ever been
    // subscribed before — regardless of current group membership. To tell a
    // real re-subscribe (was removed from the group, now rejoining) apart from
    // a true duplicate (still an active group member), check the subscriber's
    // existing group tags *before* upserting.
    const beforeResponse = await fetch(
      `https://api.sender.net/v2/subscribers/${encodeURIComponent(email)}`,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.SENDER_API_KEY}`
        }
      }
    );
    const wasAlreadyInGroup = beforeResponse.ok
      ? (await beforeResponse.json()).data?.subscriber_tags?.some(
          (tag) => tag.id === process.env.SENDER_GROUP_ID
        )
      : false;

    const subscriberData = {
      email: email,
      groups: [process.env.SENDER_GROUP_ID],
    };

    if (name) {
      subscriberData.firstname = name;
    }

    const senderResponse = await fetch('https://api.sender.net/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SENDER_API_KEY}`
      },
      body: JSON.stringify(subscriberData)
    });

    if (!senderResponse.ok) {
      const errorData = await senderResponse.json();
      console.error('Sender API Error:', errorData);
      const fieldError = errorData.errors && Object.values(errorData.errors)[0]?.[0];
      throw new Error(fieldError || errorData.message || 'Failed to subscribe');
    }

    return res.status(200).json({
      status: 'OK',
      alreadySubscribed: wasAlreadyInGroup,
      message: wasAlreadyInGroup ? 'You are already subscribed' : 'Subscription successful'
    });
  } catch (error) {
    console.error('Subscription Error:', error);
    return res.status(500).json({ 
      error: error.message || 'Subscription failed',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
