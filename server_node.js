require("dotenv").config()
const http = require("http")
const fs = require("fs")

function requestController(req, res) {
    const url = req.url
    const method = req.method
    console.log({ url, method })
    if (method === "GET" && url === "/") {
        res.setHeader("Content-type", "text/html; charset=utf-8")
        fs.readFile('./public/index.html', function (err, file) {
            if (err) {
                console.log("HUBO OTRO ERROR")
            }
            res.write(file)
            res.end()
        })

        return
    }
    if (method === "GET" && url === "/about") {
        res.setHeader("Content-type", "text/html; charset=utf-8")
        fs.readFile('./public/about.html', function (err, file) {
            if (err) {
                console.log("HUBO UN ERROR")
            }
            res.write(file)
            res.end()
        })

        return

    }

    res.setHeader("Content-type", "text/html; charset=utf-8")
    res.write("<h1>Pagina No encontrada </h1>")
    res.end()
}
const server = http.createServer(requestController)
const PORT = process.env.PORT

server.listen(process.env.PORT, function () {
    console.log("Aplicacion corriendo en puerto" + "" + PORT)
})
