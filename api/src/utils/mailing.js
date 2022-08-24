var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "",
    pass: ""
  }
});

const mandarMail = (mail, subject, text) => {
  var mailOptions = {
    from: "henryfitnessgym@gmail.com",
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
