const reportesModel = require('../models/reportes');
const reportesCtrl = {};


reportesCtrl.getReporte = async (req, res) => {
    const reportes = await reportesModel.find();
    res.json(reportes);
};

reportesCtrl.createReporte = async (req,res) => {  
    console.log(req.body)  
    try{
        const reportes = new reportesModel(req.body);
        let err = reportes.validateSync();

        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'ERROR AL INSERTAR',
                cont: {
                    err
                }
            });
        }

        const nuevoReporte = await reportes.save();

        if (nuevoReporte.length <= 0) {
            res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'No se pudo registrar el reporte.',
                cont: {
                    reportes
                }
            });
        } else {            
            res.status(200).send({
                estatus: '200',
                err: false,
                msg: 'Informacion insertada correctamente.',
                cont: {
                    reportes
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


reportesCtrl.modificarReporte = async (req, res) => {
    //console.log(res.body);
    
    try{

        const idRepor = req.query.idReporte;

        if (idRepor == '') {
            return res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se envió un id válido.',
                cont: 0
            });
        }

        req.body._id = idRepor;
        const reporteEncontrado = await reportesModel.findById(idRepor);

        if (!reporteEncontrado)
            return res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'Error: No se encontró el reporte en la base de datos.',
                cont: reporteEncontrado
        });

        const newreporte = new reportesModel(req.body);

        let err = newreporte.validateSync();

        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Error al modificar el reporte.',
                cont: {                    
                    err
                }
            });
        }

        const reporteActualizado = await reportesModel.findByIdAndUpdate(idRepor, { $set: newreporte }, { new: true });

        if (!reporteActualizado) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Al intentar actualizar el reporte.',
                cont: 0
            });
        } else {
            return res.status(200).json({
                ok: true,
                resp: 200,
                msg: 'Success: Se actualizó el reporte correctamente.',
                cont: {
                    reporteActualizado
                }
            });
        }
        
    }catch(err){
        res.status(500).send({
            estatus: '500',
            err: true,
            msg: 'ERROR AL MODIFICAR',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
}
reportesCtrl.eliminarReporte = async (req, res) => {    
    
    try{

        const idRepor = req.query.idReporte;

        if (idRepor == '') {
            return res.status(400).send({
                estatus: '400',
                err: true,
                msg: 'Error: No se envió un id válido.',
                cont: 0
            });
        }

        req.body._id = idRepor;
        const reporteEncontrado = await reportesModel.findById(idRepor);

        if (!reporteEncontrado)
            return res.status(404).send({
                estatus: '404',
                err: true,
                msg: 'Error: No se encontró el reporte en la base de datos.',
                cont: reporteEncontrado
        });

        const reporteEliminado = await reportesModel.findByIdAndDelete(idRepor);

        if (!reporteEliminado) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error: Al intentar eliminar el reporte.',
                cont: 0
            });
        } else {
            return res.status(200).json({
                ok: true,
                resp: 200,
                msg: 'Success: Se eliminó el reporte correctamente.',
                cont: {
                    reporteEliminado
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


module.exports = reportesCtrl;