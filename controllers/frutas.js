'use strict'

//importar el modelo frutas de la carpeta models
var Fruta = require('../models/frutas');

//controlador de la funcion prueba
function pruebas (req, res){
    res.status(200).send({nombre:"dickson morales"});
};

// Metodo Guarda los datos en la coleccion frutas de mongodb
function saveFruta(req, res){
    var fruta = new Fruta();
    var params = req.body;
    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) =>{
            if (err) {
               res.status(500).send({
                   message:'Error en el servidor al intentar guardar'
               });

            } else{
                if (frutaStored) {
                    res.status(500).send({
                        fruta:frutaStored
                    });
                }else{
                    res.status(200).send({
                        message:'no se ha guardado la fruta'
                    });
                }
            }
        });
        
    }else{
        res.status(200).send({
            message:'el nombre de la fruta es obligatorio'
        });
    }
}
// Fin del metodo para guardar los datos en la coleccion frutas de mongodb

// Buscar documentos en una coleccion

function getFrutas(req, res) {
    Fruta.find({}).sort({'_id':-1}).exec((err, frutas) => {
        if (err) {
            res.status(500).send({
                message:'Error en el servidor al intentar guardar'
            });
        }else{
            if (frutas) {
                res.status(200).send({
                    frutas
                }); 
            }else{
                res.status(404).send({
                    message:'no hay frutas'
                });
            }
        }
    })
}

// buscar solo un documento en la coleccion.

function getFruta(req, res) {
    var frutaId = req.params.id;
    Fruta.findById(frutaId).exec((err,fruta)=>{
        if (err) {
            res.status(500).send({
                message:'error al intentar buscar'
            });
        }else{
            if (fruta) {
                res.status(200).send({
                    fruta
                }); 
            }else{
                res.status(404).send({
                    message:'no existe la fruta'
                });
            }
        }
    })
}

//metodo para guardar un documento
function updateFruta(req, res) {
    var frutaId =req.params.id;
    var update = req.body;
    Fruta.findByIdAndUpdate(frutaId, update, {new:true}, (err, frutaUpdate) =>{
        if (err) {
            res.status(500).send({
                message:'error al intentar buscar'
            });
        }else{
            if (frutaUpdate) {
                res.status(200).send({
                    fruta: frutaUpdate
                }); 
            }else{
                res.status(404).send({
                    message:'no existe la fruta'
                });
            }
        }
    } );
    
}

// metodo borra docuemntos de la base de datos

function deleteFruta(req, res) {
    var frutaId = req.params.id;
    Fruta.findByIdAndRemove(frutaId,(err, frutaRemoved)=>{
        if (err) {
            res.status(500).send({
                message:'error al intentar buscar'
            });
        }else{
            if (frutaRemoved) {
                res.status(200).send({
                    fruta: frutaRemoved
                }); 
            }else{
                res.status(404).send({
                    message:'no existe la fruta'
                });
            }
        }
    });
    
}

//exporta las funciones como metodos
module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};