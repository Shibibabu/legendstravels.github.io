const express = require('express');
const bodyparser = require('body-parser');
const PORT = 3000;
const app = express();
const cors=require('cors');
const api = require('./routes/api');


app.use(cors());
app.use(bodyparser.json());
app.use('/api', api);
app.get('/', function(req, res) {
    res.send("hello");
})

app.listen(PORT, function() {
    console.log("server is running on localhost " + PORT);
})