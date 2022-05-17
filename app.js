// Usando objeto express
const express = require('express')
const res = require('express/lib/response')
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Respondiendo texto
//localhost:3000/lauchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenido a launchx')
})