'use strict'

var express = require('express');
var FrutasController = require('../controllers/frutas');

var api = express.Router();

api.get('/pruebas', FrutasController.pruebas);
api.post('/fruta', FrutasController.saveFruta);
api.get('/frutas', FrutasController.getFrutas);
api.get('/fruta/:id', FrutasController.getFruta);
api.put('/fruta/:id', FrutasController.updateFruta);
api.delete('/fruta/:id', FrutasController.deleteFruta)
module.exports = api;