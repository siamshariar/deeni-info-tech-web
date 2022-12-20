export default async function (req, res) {
  const { email } = req.body;

  console.log("email")
  console.log(email)

  const result = await fetch('https://ztechltd.com/w/dit-email-sub.php?email='+email, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });


  res.status(200).json({ status: 'OK' });
}
