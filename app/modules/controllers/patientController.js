const Patient = require('../models/patientModel');

exports.create = async (req, res) => {
    const { name, city, cin } = req.body;
    const patient = new Patient({
        name,
        city,
        cin
    });
    try {
        const savedPatient = await patient.save();
        res.send({
            data: savedPatient,
            message: 'Patient created successfully'
        });
    } catch (err) {
        res.status(400).send(err);
    }
  
  };

  exports.getAll = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.send({
            data: patients,
            message: 'Patients fetched successfully'
        });
    } catch (err) {
        res.status(400).send(err);
    }
  }
  

