const mongoose = require('mongoose');
const { Schema } = mongoose;

const viajeChoferSchema = new Schema({
    origenChofer: { type: String, required: false },
    destinoChofer: { type : String, required: false },
    ubicacionesChofer: Array,
    pasajerosChofer: {type: Number, required: false},
    cobroChofer: { type : Number, required: false },
    fechaViaje: { type : String, required: false },
    horaViaje: { type : String, required: false },
});

module.exports = mongoose.model('viajeChofer', viajeChoferSchema, 'viajeChofer');