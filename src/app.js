const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000


const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anuragchakraborty457@gmail.com',
        pass: 'angsu_anurag'
    }
});


app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})
app.post("/submit", (req, res) => {
    if (req.body.name && req.body.email && req.body.message) {
        let mailOptions = {
            from: 'anuragchakraborty457@gmail.com',
            to: req.body.email,
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

    res.redirect("/")
    console.log(JSON.parse(JSON.stringify(req.body)))
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})