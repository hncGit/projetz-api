let config = require('./config');
let mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect(config.mongodbUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected to data base');
});