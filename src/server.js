//inportando dependencias
const express = require('express')
const hbs = require('hbs')
const page = require('./pages.js')
const server = express()

//navegação em diretorios do proprio node
const path = require('path')

server
//arquibos estaticos
.use(express.static("public"))

//configuração tamblate engine
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")

//criando rota
.get('/', page.index)
.get('/orphanage', page.orphanage)
.get('/orphanages', page.orphanages)
.get('/create-orphanage', page.createOrphanage)

// porta do servidor
server.listen(5500)