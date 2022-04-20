const Router = require("express").Router()
const Patient = require("../modules/controllers/patientController")


Router.post("/create", Patient.create)
Router.get("/getall", Patient.getAll)


module.exports = Router ;



