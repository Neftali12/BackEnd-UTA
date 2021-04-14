const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();

router.post('/', async(req, res) => {
    let body = req.body;
    let strCorreo = req.body.strCorreo
    console.log(req.body)

     await Usuario.findOne({ strCorreo: body.strCorreo, blnActivo: true, strPassword: body.strPassword }, (err, usrDB) => {
         console.log(err)
         console.log(usrDB)
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento del logueo',
                err
            })
        }

        if (!usrDB) {
            return res.status(400).json({
                ok: false,
                msg: 'Mail incorrecto o inexistente intentelo de nuevo',
                
            });
        }

        if (!body.strPassword) {
            return res.status(401).json({
                ok: false,
                msg: 'Contraseña incorrecta, intentelo de nuevo'
            })
        }

        res.json({
            ok: true,
            msg: `Bienvenido ${usrDB.nombre}`,
            usrDB
        })
    });
});

module.exports = router;