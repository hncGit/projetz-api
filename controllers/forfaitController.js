let mongoose = require('mongoose');
let Forfait = mongoose.model("Forfait");

exports.list_all_forfait = (req, res) => {
    Forfait.find({}, {_id: 0}).then(forfaits =>{
        res.json(forfaits);
    });
};

exports.list_forfaits_type = (req, res) => {
    Forfait.find({}, {_id: 0, operateur: req.params.operateur, nbJours: req.params.nbJours}).then(forfaits => {
        res.json(forfaits);
    });
}