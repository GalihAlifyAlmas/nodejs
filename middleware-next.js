// JavaScript source code

const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method );
    next();
});

app.get('/', function (req, res) {
    console.log('Salam dari Express.js');
    res.send('Salam dari Express.js');
});

app.get('/user/:id', function (req, res) {
    console.log('Menampilkan user ID');
    res.send('Menampilkan user ID');
});

app.listen(300, function () {
    console.log('Berjalan di port 3000!');
}) ;