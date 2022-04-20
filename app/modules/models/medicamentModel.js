const mongoose = require('mongoose')

const MedicamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('medicament', MedicamentSchema)
