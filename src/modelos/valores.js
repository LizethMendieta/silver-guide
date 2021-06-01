const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const val = new Schema({
    Suelo: String,
    Temperatura: String,
    Humedad: String,
    Fecha: Date
});
module.exports = mongoose.model('iots', val);