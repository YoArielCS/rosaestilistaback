require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Conexion exitosa con la base de datos!!")
}).catch((err) => console.log("Hubo un error en la conexion con la BD", { err }))
// Definir un esquema para el modelo de datos del formulario de contacto
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
})
// Crear un modelo de mongoose basado en el esquema
const Contact = mongoose.model('Contact', contactSchema, 'Contactos')

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
