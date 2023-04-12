var nodemailer = require('nodemailer');
let nick = document.getElementById("nick").value;
let botName = document.getElementById('bot').value;
let rodzajzlecenia = document.getElementById('select').value;
let uwagi = document.getElementById('uwagi').value;
let message = `Nick użytkownika: ${nick}\n Nazwa bota: ${botName}\n rodzaj zlecenia: ${rodzajzlecenia}\n Uwagi: ${uwagi}`;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact.pokmonbot@gmail.com',
      pass: 'Poliki999'
    }
  });
  var mailOptions = {
    from: 'example@example.com',
    to: 'contact.pokmonbot@gmail.com',
    subject: 'Zlecenie',
    text: `${message}`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });