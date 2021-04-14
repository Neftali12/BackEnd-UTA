const pagosModel = require('../models/pagos');
const pagosCtrl = {};


pagosCtrl.getPago = async (req, res) => {
    const pagos = await pagosModel.find();
    res.json(pagos);
};

pagosCtrl.createPago = async (req,res) => {    
    try{
        const pagos = new pagosModel(req.body);
        let err = pagos.validateSync();

        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'ERRO AL INSERTAR',
                cont: {
                    err
                }
            });
        }

        const nuevoPago = await pagos.save();

        if (nuevoPago.length <= 0) {
            res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'No se pudo registrar el pago.',
                cont: {
                    pagos
                }
            });
        } else {            
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion insertada correctamente.',
                cont: {
                    pagos
                }
            });
        }
        
        
        
    }catch(err){        
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'ERROR AL REGISTRAR',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });               
    }    
};

pagosCtrl.eliminarPago = async (req, res) => {    
    
    try{

        const idPago = req.query.idPago;

        if (idPago == '') {
            return res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se envió un id válido.',
                cont: 0
            });
        }

        req.body._id = idPago;
        const pagoEncontrado = await pagosModel.findById(idPago);

        if (!pagoEncontrado)
            return res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'Error: No se encontró el pago en la base de datos.',
                cont: pagoEncontrado
        });

        const pagoEliminado = await pagosModel.findByIdAndDelete(idPago);

        if (!pagoEliminado) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Al intentar eliminar el pago.',
                cont: 0
            });
        } else {
            return res.status(200).json({
                ok: true,
                resp: 200,
                msg: 'Success: Se eliminó el pago correctamente.',
                cont: {
                    pagoEliminado
                }
            });
        }
        
    }catch(err){
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'ERROR AL ELIMINAR',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
}

module.exports = pagosCtrl;