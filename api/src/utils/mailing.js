var nodemailer = require("nodemailer");

/*
// Con OAuth (Complicado xD)
ID de cliente - clientId
1091684332827-8gnttauv5c8rvbjp1heq1ks4l5d525m7.apps.googleusercontent.com

Tu secreto del cliente - clientSecret
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

 - refreshToken  // nunca me mando

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: "henryfitnessgym@gmail.com",
    pass: "HenFit-2022",
    clientId: "1091684332827-8gnttauv5c8rvbjp1heq1ks4l5d525m7.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken: "refreshToken"
  }
});


 // Simple
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "henryfitnessgym@gmail.com",
    pass: "bcncjizwlajqmqdt"
  }
});

*/

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "henryfitnessgym@gmail.com",
    pass: "bcncjizwlajqmqdt"
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
