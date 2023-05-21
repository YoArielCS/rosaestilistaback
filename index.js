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
// Parsear las solicitudes JSON
app.use(bodyParser.json())


//configurar rutas
app.get('/public', (req, res) => {
    res.send('')
})
// Endpoint para guardar los datos del formulario
app.post('/public', (req, res) => {
    const { name, email, comment } = req.body

    // Validación simple de los datos del formulario
    if (!name || !email || !comment) {
        return res.status(400).json({ error: 'Por favor ingrese todos los campos.' })
    }

    // Crear una nueva instancia del modelo Contact con los datos del formulario
    const newContact = new Contact({
        name,
        email,
        comment,
    })

    // Guardar los datos del formulario en la base de datos
    newContact.save((err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error inesperado. Por favor, inténtelo de nuevo más tarde' });
        }
        return res.json({ message: '¡Gracias! Hemos recibido tu mensaje.' })
    })
})
// poner escuchar la app en un puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
