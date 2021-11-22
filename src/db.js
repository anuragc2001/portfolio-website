const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }) //new way to config dotenv
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODBLINK, { useNewUrlParser: true })

const visitorSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
})

const Visitor = mongoose.model("Visitor", visitorSchema)

const saveVisitorDB = function (name, email, subject, message, res) {
    const visitor = new Visitor({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    visitor.save()
        .then(() => {
            res.redirect("/")
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports = {
    saveVisitorDB: saveVisitorDB
}