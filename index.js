let express = require("express");
let morgan = require("morgan");
let favicon = require("serve-favicon");
let bodyParser = require('body-parser');
let db = require('./database');
let config = require('./config');

let app = express();

app.use(morgan('combined'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())


app.listen(config.port);

console.log('Ozone Service started on: ' + config.port);