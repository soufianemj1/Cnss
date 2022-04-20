const Router = require("express").Router()
const Medicament = require("../modules/controllers/medicamentController")

Router.post("/create", Medicament.create)
Router.get("/getmedicaments", Medicament.getAll)
Router.get("/getmedicaments/:id", Medicament.getOne)


module.exports = Router;

