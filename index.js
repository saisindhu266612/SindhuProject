var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Satya" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World Satya" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Satya" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
