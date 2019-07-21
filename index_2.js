let nodemailer = require('nodemailer');

let recipient = 'datsikvv@gmail.com';
let textForEmail = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'datsyk.test@gmail.com',
    pass: 'EmbYgsVkv2u4KtE'
  }
});

let mailOptions = {
  from: 'datsyk.edu@gmail.com',
  to: recipient,
  subject: 'Sending Email using Node.js',
  text: textForEmail
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});