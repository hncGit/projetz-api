var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
    ozone_id : String,
    operateur : String,
});

module.exports = mongoose.model('User', userSchema);
