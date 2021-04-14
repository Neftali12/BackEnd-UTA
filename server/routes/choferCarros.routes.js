const express = require('express');
const router = express.Router();

const ChoferCarrosCtrl = require('../controllers/choferCarros.controller');

router.get('/', ChoferCarrosCtrl.getChoferCarros);

router.post('/', ChoferCarrosCtrl.createChoferCarro);

router.post('/filtroCarro', ChoferCarrosCtrl.filtrarCarros);

// router.post('/',userCtrl.createUser);

// router.get('/:id',userCtrl.getUser);

// router.put('/:id',userCtrl.editEmployee);

// router.delete('/:id',userCtrl.deleteEmployee);

module.exports = router;