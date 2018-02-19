let mongoose = require('mongoose'),
    User = mongoose.model('User')

exports.list_all_users = (req, res) => {
    User.find({}, {_id: 0}).then(users => {
        res.json(users) ;
    });
};

exports.create_user = (req, res) =>{
    let user = new User({ozone_id: req.body.ozone_id, operateur : req.body.operateur});
    user.save();
}