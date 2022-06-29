// JavaScript source code

var fs = require("fs"); // memanggil module fs dan memasukannya ke dalam variabel fs

console.log("START");

// menggunakan modul fs untuk membaca file secara asynchronous 
fs.readFile('asynchronous.txt', function (err, data){
    if (err) {
        return console.error(err);
    }
    console.log("File ini dibaca secara asynchronous: " + data.toString());
});

// menggunakan modul fs untuk membaca file secara synchronous
var data = fs.readFileSync('synchronous.txt');
console.log("File ini dibaca secara synchronous: " + data.toString());

console.log("STOP");