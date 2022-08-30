var nodemailer = require("nodemailer");
const { GMAIL_CLIENTID, GMAIL_CLIENTSECRET, GMAIL_REFRESHTOKEN, GMAIL_USER, GMAIL_PASSWORD, GMAIL_PASSWORD_TERCEROS } = process.env;

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD_TERCEROS
  }
});

const mandarMail = (mail, subject, text) => {
  var mailOptions = {
    from: GMAIL_USER,
    to: mail,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
    mandarMail,
};
