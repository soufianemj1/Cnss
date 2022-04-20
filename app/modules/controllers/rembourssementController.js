const Rembourssement = require("../models/rembourssementModel");
const Patient = require("../models/patientModel");


exports.create = (req, res) => {
    try{
        const someTotal = req.body.some;
        const repayement = someTotal *(50/100)
        console.log(repayement)
        
        const {patientId, date} = req.body;
        const rembourssement = new Rembourssement({
            patientId,
            repayement,
            date
        })
        rembourssement.save()
        res.send({
            data: rembourssement,
            message: 'Remboursement created successfully'
        })
    }
    catch(err){
        res.status(400).send(err);
    }
}

exports.getAll = async (req, res) => {
    try{
      const rembourssement = await Rembourssement.find().populate('patientId')
      res.send({
          data:rembourssement,
          message:"fetch all repayement succefuly"
      })
    }
    catch(err){
        res.status(400).send(err);
    }
}

