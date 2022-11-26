console.log("Belajar NodeJS");

const halo = require('./hello')

// panggil
halo.mahasiswa()
halo.dosen()
const url = require('url')
// import module http
const fs = require('fs')
// import module fs
const path = require('path')
// import module path
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('selamat pagi')
        res.end()
    } else if (req.url == '/about') {
        res.writeHead(200, {
            "Content-type" : "text / html"
        })
        res.write("<h2>About</h2><p>ini halaman about</p>")
        res.end()
    } else if (req.url == '/contact') {
        fstat.readFile(path.join(__dirname, "contact.html"), (err, data) => {
            res.writeHead(200, {
                "content-type" : "text/html"
            })
            res.write(data)
            res.end()
        })
    }
})

server.listen(5000, () => {
    console.log('Server Running')
})