let mongoose = require('mongoose');
let config = require('./config');

mongoose.Promise = require('bluebird');

mongoose.connect(config.mongodbUri, {
    useMongoClient : true
});

let db = mongoose.connection;

require('./models/user');
require('./models/forfait');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected to data base');
});