let mongoose = require('mongoose');
let Schema = mongoose.Schema ;

let forfaitSchema = new Schema({
    nom : String,
    operateur : String,
    nbJours : Number,
    codeUSSD : String,
    nbOctets : Number,
    type_forfait : {
        type : String,
        enum : ['standard', 'gigadata', 'night', 'nigth_day']
    }
});

module.exports = mongoose.model("Forfait", forfaitSchema);