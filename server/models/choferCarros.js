const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChoferCarrosSchema = new Schema({
    idChofer: { type: mongoose.mongo.ObjectId, required: true },
    placasCarro: { type: String, required: false },
    modeloCarro: { type : String, required: false },
    yearCarro: { type : Number, required: false },
    colorCarro: { type : String, required: false }
});

module.exports = mongoose.model('choferCarros', ChoferCarrosSchema, 'choferCarros');