const mongoose = require('mongoose')
const { Schema } = mongoose;
const RembourssementSchema = new mongoose.Schema({
    patientId:{
     type: mongoose.Schema.Types.ObjectId, ref: 'Patient',
     required: true
    },
    repayement:{
        type: Number, min: 1, max: 999999,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})
module.exports = mongoose.model('Rembourssement', RembourssementSchema)