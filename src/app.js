const express = require('express');
const bodyParser = require('body-parser')
const visitor = require("./db")
const mailer = require("./mailer")

const port = process.env.PORT || 3000


const app = express();


app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})
app.post("/submit", (req, res) => {
    if (req.body.name && req.body.email && req.body.subject && req.body.message) {

        visitor.saveVisitorDB(req.body.name, req.body.email, req.body.subject, req.body.message, res)

        mailer.sendEmail(req.body.email)

        res.redirect("/")

    } else {
        setTimeout(() => {
            res.redirect("/#s4")
        }, 1800)

    }
    // console.log(JSON.parse(JSON.stringify(req.body)))
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})