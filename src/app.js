const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000


const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})
app.post("/submit", (req, res) => {
    res.redirect("/")
    console.log(JSON.parse(JSON.stringify(req.body)))
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})