require("dotenv").config()
const http = require("http")
function requestController() {
    //logica de nuestra funcion
    console.log("Hola Mundos!!!")
}
//configurar nuetra Servidor
const server = http.createServer(requestController)
const PORT = process.env.PORT
server.listen(process.env.PORT, function () {
    console.log("Aplicacion corriendo en puerto" + "" + PORT)
})
