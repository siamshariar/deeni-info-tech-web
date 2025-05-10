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
      groups: [process.env.MAILERLITE_GROUP_ID],
      resubscribe: false,
      type: "active"
    };

    if (name) {
      subscriberData.fields = {
        name: name
      };
    }

    const mailerliteResponse = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
      },
      body: JSON.stringify(subscriberData)
    });

    if (!mailerliteResponse.ok) {
      const errorData = await mailerliteResponse.json();
      console.error('MailerLite API Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to subscribe');
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
