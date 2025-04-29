const express = require('express')
const color = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))

app.listen(port, ()=>console.log(`Servidor iniciado en el puerto ${port}`))

