let mongoose = require('mongoose');
let Schema = mongoose.Schema ;

let forfaitSchema = new Schema({
    nom : string,
    nbJours : number,
    codeUSSD : string,
    nbOctets : number,
    type_forfait : {
        type : string,
        enum : ['standard', 'gigadata', 'night', 'nigth_day']
    }
});

module.exports = mongoose.model("Forfait", forfaitSchema);