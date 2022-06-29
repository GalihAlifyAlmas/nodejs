// JavaScript source code

const express = require ('express');
const app = express();

app.get('/', function (req, ress) {
    ress.send('Express.js GET');
});

app.all('/all', function (req, res) {
    res.send('Express.js ALL!');
});

app.listen(300, function () {
    console.log('Aplikasi ini berjalan pada port 3000!');
});