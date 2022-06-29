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

    var sql = "INSERT INTO productdua(id_product, nama_product,gambar_product,harga_product,des_product,createdate) VALUES(1, 'sepatu','sepatu.jpg',3000,'sepatu baru berkualitas','2020-6-12')";
    

    connection.query(sql, function(err, result){
        if(err) {
            throw err;
        }

        console.log("1 record berhasil di-insert");
        connection.destroy();
    });

});