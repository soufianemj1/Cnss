const Medicament = require('../models/medicamentModel');

exports.create = async(req, res) => {
    const {name,price} = req.body;
    const medicament = new Medicament({
        name,
        price
    });
    try{
        medicament.save();
        res.send({
            data: medicament,
            message: 'Medicament created successfully'
        })
    }
    catch(err){
        res.status(400).send(err);
    }
}
exports.getAll= async(req, res) => {
    try{
        const medicament = await Medicament.find();
        res.send({
            data: medicament,
            message: 'Medicament list'
        })
    }
    catch(err){
        res.status(400).send(err);
    }
}
exports.getOne = async(req, res) => {
    try{
        const medicament = await Medicament.findByid(req.params._id);
        res.send({
            data: medicament,
            message: 'Medicament by id'
        })
    }
    catch(err){
        res.status(400).send(err);
    }
}

