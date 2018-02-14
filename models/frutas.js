'use strict'

//requerimos mongoose y los instanciamos en un variable con metodo Schema de mongoose.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FrutasSchema = Schema({
    nombre: String,
    color: String,
    temporada: Boolean
});

// lo exportamos
module.exports = mongoose.model('Fruta', FrutasSchema);