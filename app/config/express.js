var config = require('./config');
var express = require('express');
var logger = require('morgan');
var compress = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
const PatientRoute = require('../routes/patientRoute');
const MedicamentRoute = require('../routes/medicamentRoute');
const RembourssementRoute = require('../routes/rembourssementRoute');

// var glob = require('glob');

module.exports = function(){
    
    var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access_token");
        res.header("Access-Control-Allow-Methods","PUT, GET, POST, OPTIONS, DELETE");
        next();
    });

    app.use(express.static(path.join(__dirname, '../uploads')));

    if(process.env.NODE_ENV == 'development'){
        app.use(logger('dev'));
    }else{
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    
    app.use(bodyParser.json());
    app.use(methodOverride());

    // ALL ROUTES
    app.use('/api/patient', PatientRoute);
    app.use('/api/medicament', MedicamentRoute);
    app.use('/api/remboursement', RembourssementRoute);


    return app;
}
