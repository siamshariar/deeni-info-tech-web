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
      throw new Error(errorData.message || 'Failed to subscribe');
    }

    return res.status(200).json({
      status: 'OK',
      message: 'Subscription successful'
    });
  } catch (error) {
    console.error('Subscription Error:', error);
    return res.status(500).json({ 
      error: error.message || 'Subscription failed',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
