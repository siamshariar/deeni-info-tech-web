export default async function (req, res) {
  const { email } = req.body;

  console.log("email")
  console.log(email)

  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

  const result = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
    method: 'POST',
    headers: {

      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      resubscribe: true, // Allows resubscription if email exists
    }),
  });


  if (result.status === 200 || result.status === 201) {
    res.status(200).json({ status: 'OK' });
  } else {
    const errorData = await result.json();
    console.error(errorData);
    res.status(result.status).json({ status: 'FAILED', error: errorData });
  }
}
