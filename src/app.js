const express = require('express');
const port = process.env.PORT || 3000


const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {

})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})