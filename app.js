'use strict'

// Requerir express
var express  =require('express');
var bodyParser = require('body-parser');

var app = express();


//cargar rutas


// body-parser convierte los datos recibidos por url a json

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas
app.get('/prueba_api', (req, res)=>{
    res.status(200).send({nombre:"dickson morales"});
})

module.exports = app;