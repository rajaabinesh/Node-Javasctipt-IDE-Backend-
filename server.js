/*
Author  : C.RAJA ABINESH
Company : GSM PLUS INFOTECH
*/

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
import database from './Configuration/database.config' 
import config from './Configuration/config'

const helmet = require('helmet') // Handle Xss attacks

database.connectToMysqlDb(); // Database connection

const app = express();
app.disable('x-powered-by')
app.use(helmet.xssFilter())  // xss filter
app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'by-content-type' })) //xss filter

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');  // set headers for all api
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method == 'OPTIONS') {
        res.status(200).end(); // If request method is option set success code
    }
    else {
        next();
    }
});

const api = require('./routes/api.js'); // Importing files of api

const port = process.env.PORT || config.app_port;
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api); //api code set as express framework

const server = http.createServer(app);
server.listen(port, () => console.log(`Magic Happens on port ${port}`));


