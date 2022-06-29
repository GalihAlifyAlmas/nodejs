// JavaScript source code

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommercedua"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log("Terkoneksi dengan sukses!");

    var sql = "CREATE TABLE productdua(id_product INT(11), nama_product VARCHAR(255), gambar_product VARCHAR(255), harga_product INT(11), des_product VARCHAR(255), createdate DATE)";
    connection.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
    });
    
});
