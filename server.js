const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
const app = express();
app.use(express.static(__dirname + '/dist/se-knowledge-base'));
app.use(bodyParser.json())
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/se-knowledge-base/index.html'));});
app.listen(process.env.PORT || 8080);
app.post("/webhook", (req, res) => {
    console.log(req) 
    res.status(200,
        {
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        }).end() 
  })
