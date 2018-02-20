'use strict'

// requerir express y express
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
// quitar error que se produce cuando se conecta la base datos.
mongoose.Promise = global.Promise;

// url de la conexion de la base datos.
mongoose.connect('mongodb://admin:7777@cluster0-shard-00-00-pysyq.mongodb.net:27017,cluster0-shard-00-01-pysyq.mongodb.net:27017,cluster0-shard-00-02-pysyq.mongodb.net/mongo_frutas?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', {useMongoClient: true})
        .then(()=>{
            console.log('la conexion a mongodb se ha realizado correctamente');
            app.listen(port, () =>{
                console.log('El servidor esta escuchando en el pruerto 3800')
            })
        })
        .catch(err => console.log(err));
