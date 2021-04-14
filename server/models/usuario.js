const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema({
    strNombre: {type: String, required: [true, 'Favor de ingresar su nombre.']},
    strPassword: {type: String,required: [true, 'Favor de ingresar sus apellidos.']},
    strDireccion: String,
    tipo:{type:String,default: 'USER_ROLE'},
    nmbEdad: {type: Number,required: [true, 'Favor de ingresar su edad.']},
    arrTelefonos: Array,
    strCorreo: {type: String,required: [true, 'Favor de ingresar su correo electrónico']},
    blnActivo: {type: Boolean,default: true}}, 
    {timestamps: {createdAt: 'created_at',updatedAt: 'updated_at'}
});

module.exports = mongoose.model('Usuarios', UsuariosSchema, 'Usuarios');