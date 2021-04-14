const usuario = require('../models/usuario');
const usuarioModel = require('../models/usuario');
const _ = require('underscore');
var mongoose = require('mongoose');
const usuarioCtrl = {};


usuarioCtrl.getUsuarios = async (req, res) => {
    console.log('Entró');
    const usuario = await usuarioModel.find({blnActivo:true});
    res.json(usuario);
};

usuarioCtrl.createUsuario = async (req, res) => {
    const newUser = new usuario({
        strNombre: req.body.strNombre,
        strPassword: req.body.strPassword,
        strDireccion: req.body.strDireccion,
        nmbEdad: req.body.nmbEdad,
        arrTelefonos: req.body.arrTelefonos,
        strCorreo: req.body.strCorreo,
        tipo: req.body.tipo
    });
    await newUser.save();
    res.json({
        'status': 'Se guardó el Usuario Nuevo.'
    });
};

usuarioCtrl.putUsuario = async (req, res) => {
    
    try {
        const idPersona =  new mongoose.mongo.ObjectId(req.body._id);
        console.log(req.body._id)

        if (idPersona == '') {
            return res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se envio un id valido.',
                cont: 0
            });
        }
        req.body._id = idPersona;

        const personaEncontrada = await usuarioModel.findById(idPersona);

        if (!personaEncontrada)
            return res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'Error: No se encontro la persona en la base de datos.',
                cont: personaEncontrada
            });

        const newPersona = new usuarioModel(req.body);

        let err = newPersona.validateSync();

        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Error al Insertar la persona.',
                cont: {
                    err
                }
            });
        }

        const personaActualizada = await usuarioModel.findByIdAndUpdate(idPersona, { $set: newPersona }, { new: true });

        if (!personaActualizada) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Al intentar actualizar la persona.',
                cont: 0
            });
        } else {
            return res.status(200).json({
                ok: true,
                resp: 200,
                msg: 'Success: Se actualizo la persona correctamente.',
                cont: {
                    personaActualizada
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error: Error al actualizar la persona.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
}

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
       let idPersona = new mongoose.mongo.ObjectId(req.body.id) ;
       console.log(req.body.id);
        blnActivo = req.body.blnActivo;
        if (req.body.idPersona == '') {
            return res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se envio un id valido.',
                cont: 0
            });
        }
        const personaEncontrada = await usuarioModel.findById(idPersona);

        if (!personaEncontrada)
            return res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'Error: No se encontro el persona en la base de datos.',
                cont: personaEncontrada
            });

        const personaActualizada = await usuarioModel.findByIdAndUpdate(idPersona, { $set: { blnActivo } }, { new: true });

        if (!personaActualizada) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Al intentar eliminar la persona.',
                cont: 0
            });
        } else {
            return res.status(200).json({
                ok: true,
                resp: 200,
                msg: `Success: Se a ${blnActivo === 'true' ? 'activado' : 'desactivado'} la persona correctamente.`,
                cont: {
                    personaActualizada
                }
            });
        }


    } catch (err) {
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'Error: Error al eliminar a la persona.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });

    }
}


module.exports = usuarioCtrl;