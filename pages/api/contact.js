require("dotenv").config();
let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASS,
    },
    // secure: true,
  });
export default async function (req, res) {
  try {
  const mailData = {
    from: "contact.no.reply@portfolext.com",
    to: process.env.MAILDATA_TO,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent by: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  await transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(404).send("error" + JSON.stringify(err));
    } else {
      res.status(200).send("success");
    }
  });
}
catch (err) {
  res.status(404).send("error" + JSON.stringify(err));
}
}
