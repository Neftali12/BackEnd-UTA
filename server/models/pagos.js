const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagosSchema = new Schema({
    cantidad: { 
        type: Number, 
        required: [true, 'Favor de ingresar la cantidad.'] 
    },
    tipoPago: { 
        type: String, 
        required: [true, 'Favor de ingresar el tipo de pago.'] 
    },    
},{
    collection: "pagos"
});

module.exports = mongoose.model('Pagos', PagosSchema);