const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }) //new way to config dotenv
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmail = function (email) {

    let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'New Message from ' + "Anurag",
        text: "Successful!!!"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = {
    sendEmail: sendEmail
}

console.log(process.env.yes)