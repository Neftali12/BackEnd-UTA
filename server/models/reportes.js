const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReportesSchema = new Schema({
    origen: { 
        type: String, 
        required: [true, 'Favor de ingresar el origen.'] 
    },
    destino: { 
        type: String, 
        required: [true, 'Favor de ingresar el destino.'] 
    },
    duracion: { 
        type: String, 
        required: [true, 'Favor de ingresar la duración del viaje.'] 
    },
    fecha: { 
        type: Date, 
        required: [true, 'Favor de ingresar la fecha.'] 
    },

},{
    collection: "reportes"
});

module.exports = mongoose.model('Reportes', ReportesSchema);