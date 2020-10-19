//inportando dependencias
const express = require('express')
const pages = require('./pages.js')
const server = express()

//navegação em diretorios do proprio node
const path = require('path')

server

//utilizando body do req
.use(express.urlencoded({extended: true}))
//arquibos estaticos
.use(express.static("public"))

//configuração tamblate engine
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")

//criando rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// porta do servidor
server.listen(5500)