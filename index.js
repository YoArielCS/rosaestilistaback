require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
// servir archivos estaticos
app.use(express.static('public'))

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
