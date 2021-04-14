const { json } = require('express');
const mongoose = require('mongoose');
const choferCarros = require('../models/choferCarros');
const choferCarrosModel = require('../models/choferCarros');
const ChoferCarrosCtrl = {};


ChoferCarrosCtrl.getChoferCarros = async (req, res) => {
    console.log('Entró');
    const choferCarros = await choferCarrosModel.find();
    res.json(choferCarros);
};

ChoferCarrosCtrl.createChoferCarro = async (req,res) => {
    const newCarro = new choferCarros({
        idChofer: new mongoose.mongo.ObjectId(req.body.idChofer),
        placasCarro: req.body.placasCarro,
        modeloCarro: req.body.modeloCarro,
        yearCarro : req.body.yearCarro,
        colorCarro: req.body.colorCarro
    });
    await newCarro.save();
    res.json({
       'status' : 'Se guardó el carro.'
    });
};

ChoferCarrosCtrl.filtrarCarros = async (req, res) => {
    let idChofer = new mongoose.mongo.ObjectId(req.body.idChofer);
    const choferCarros = await choferCarrosModel.find({
        idChofer: idChofer
    });
    res.json(choferCarros);
}

module.exports = ChoferCarrosCtrl;