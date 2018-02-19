var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
    ozone_id : string,
    operateur : string,
});

module.exports = mongoose.model('User', userSchema);
