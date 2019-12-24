 

require('dotenv').config();

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

// Step 1
const auth = {
    auth: {
        api_key: process.env.API_KEY, 
        domain: process.env.DOMAIN 
    }
};

// Step 2
let transporter = nodemailer.createTransport( mailGun(auth) );


// Step 3
let mailOptions = {
    from: 'sandeepgausi19@gmail.com',  
    to: 'hadda.sandeepgausi@gmail.com',  
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs',err);
    }
    return log('Email sent!!!');
});