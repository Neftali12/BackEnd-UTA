const express = require('express');
const router = express.Router();

const viajeChoferCtrl = require('../controllers/viajeChofer.controller');

router.get('/', viajeChoferCtrl.getViajeChofer);

router.post('/', viajeChoferCtrl.createViajeChofer);

// router.post('/',userCtrl.createUser);

// router.get('/:id',userCtrl.getUser);

// router.put('/:id',userCtrl.editEmployee);

// router.delete('/:id',userCtrl.deleteEmployee);

module.exports = router;