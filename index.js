const http = require("http")
function requestController() {
    //logica de nuestra funcion
    console.log("Hola Mundo!!!!!!")
}
//configurar nuetra funcion
const server = http.createServer(requestController)
server.listen(4000)
