const viajeChofer = require('../models/viajeChofer');
const viajeChoferModel = require('../models/viajeChofer');
const viajeChoferCtrl = {};


viajeChoferCtrl.getViajeChofer = async (req, res) => {
    console.log('Entró');
    const viajeChofer = await viajeChoferModel.find();
    res.json(viajeChofer);
};

viajeChoferCtrl.createViajeChofer = async (req,res) => {
    const newViaje = new viajeChofer({
        origenChofer: req.body.origenChofer,
        destinoChofer: req.body.destinoChofer,
        cobroChofer : req.body.cobroChofer,
        ubicacionesChofer: req.body.ubicacionesChofer,
        pasajerosChofer: req.body.pasajerosChofer,
        fechaViaje : req.body.fechaViaje,
        horaViaje : req.body.horaViaje
    });
    await newViaje.save();
    res.json({
       'status' : 'Se guardó el viaje.'
    });
};

module.exports = viajeChoferCtrl;