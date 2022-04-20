const Router = require('express').Router();
const Rembourssement = require('../modules/controllers/rembourssementController');

Router.post('/create', Rembourssement.create);
Router.get('/getall', Rembourssement.getAll);
module.exports = Router;
