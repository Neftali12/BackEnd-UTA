const express = require('express');
const router = express.Router();

const reportesCtrl = require('../controllers/reportes.controller');

router.get('/', reportesCtrl.getReporte);

router.post('/', reportesCtrl.createReporte);

router.put('/', reportesCtrl.modificarReporte);

router.delete('/', reportesCtrl.eliminarReporte);

module.exports = router;