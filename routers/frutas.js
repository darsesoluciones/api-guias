'use strict'

var express = require('express');
var FrutasController = require('../controllers/frutas');

var api = express.Router();

api.get('/pruebas', FrutasController.pruebas);
api.post('/fruta', FrutasController.saveFruta);
api.get('/frutas', FrutasController.getFrutas)

module.exports = api;