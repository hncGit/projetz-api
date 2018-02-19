var config = require('./config-dev');

module.exports = {
    "mongodbUri" : process.env.MOGODB_URI || config.mongodbUri,
    "port" : parseInt(process.env.PORT) || config.port
}