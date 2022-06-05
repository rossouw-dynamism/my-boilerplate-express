let express = require('express');
let app = express();



console.log("Hello World")

app.get('/', (req, res) => {
    res.send('Hello Express')
    console.log("sending Hello Express in the response")
  })

module.exports = app;
