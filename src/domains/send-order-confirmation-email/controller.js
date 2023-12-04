// This controller will send an email to the customer when the order has been finalized

// This will hold the information regarding connection to the database.
require("dotenv").config();

const nodemailer = require("nodemailer");

const { htmlToSend } = require('./email');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (req, res) => {

  const { email, subject, message , products } = req.body;
  
  var mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: subject,
    text: message,
    html: htmlToSend("Shahryar Anwer" , 100 , products )
  };

  return new Promise((resolve , reject) => {

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      });

  })
  
};

module.exports = { sendEmail };
