const express = require('express');
const router = express.Router();

const UsuarioCtrl = require('../controllers/usuario.controller');

router.get('/',UsuarioCtrl.getUsuarios);

router.post('/', UsuarioCtrl.createUsuario);

router.put('/',UsuarioCtrl.putUsuario);

router.delete('/:id',UsuarioCtrl.deleteUsuario);

router.post('/delete', UsuarioCtrl.deleteUsuario);

router.post('/put', UsuarioCtrl.putUsuario);

module.exports = router;