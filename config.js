var config = require('./config-dev');

module.exports = {
    "mongodbUri" : process.env.MOGODB_URI || config.mongodbUri,
    "port" : process.env.PORT || config.port
}