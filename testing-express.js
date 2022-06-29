// JavaScript source code

const express = require ('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Salam dari Express.js!');
});

app.listen(300, function () {
    console.log('Aplikasi ini berjalan pada port 3000!');
});