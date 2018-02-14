'use strict'

var express = require('express');
var FrutasController = require('../controllers/frutas');

var api = express.Router();

api.get('/pruebas', FrutasController.pruebas);

module.exports = api;