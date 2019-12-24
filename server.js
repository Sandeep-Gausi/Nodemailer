  
require('dotenv').config();

const nodemailer = require('nodemailer');
   const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD  
    }
});
 

// Step 2
let mailOptions = {
    from: 'sandeepgausi19@gmail.com', 
    to: 'hadda.sandeepgausi@gmail.com', 
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    attachments: [
        { filename: 'correct.png', path: './correct.png' }  
    ]
     
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs' + err);
    }
    return log('Email sent!!!');
});