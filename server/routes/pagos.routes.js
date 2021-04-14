const express = require('express');
const router = express.Router();

const pagosCtrl = require('../controllers/pagos.controller');

router.get('/', pagosCtrl.getPago);

router.post('/', pagosCtrl.createPago);

router.delete('/', pagosCtrl.eliminarPago);

module.exports = router;