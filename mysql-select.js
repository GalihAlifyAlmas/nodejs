// JavaScript source code

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log("Terkoneksi dengan sukses!");

    connection.query("SELECT * FROM product", function (err, result, fields) {
        if (err) {
            throw err;
        }

        console.log(result);
        connection.destroy();
    });
});