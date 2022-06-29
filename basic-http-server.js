// Java Script source code
var http = require('http'); // memanggil modul http dan memasukannya ke variabel http (nama boleh bebas)

http.createServer(function (req, res) {
    res.write('Ini adalah server http!'); // tulis pesan atau respon yang ingin di tampilkan
    res.end(); // mengakhiri respons
}). listen(8090); // menggunakan port 8090 untuk menampilkan respons