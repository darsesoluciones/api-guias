'use strict'

// Requerir express
var express  =require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var fruta_router = require('./routers/frutas');


// body-parser convierte los datos recibidos por url a json

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas 
app.use('/api', fruta_router);

//exporta la variable "app" como modulo para poder ser importado
module.exports = app;