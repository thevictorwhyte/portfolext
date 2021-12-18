require("dotenv").config();
export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: "whytebot.do.not.reply@gmail.com",
    to: "victordavidwhyte@gmail.com",
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
