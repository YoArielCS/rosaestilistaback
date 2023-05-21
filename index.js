require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Conexion exitosa con la base de datos!!")
}).catch((err) => console.log("Hubo un error en la conexion con la BD", { err }))
// servir archivos estaticos
app.use(express.static('public'))
app.use(express.json())

//configurar rutas
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send([{ name: "Ariel" }, { name: "Rosa" }])
})
// poner escuchar la app en un puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
