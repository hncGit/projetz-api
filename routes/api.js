module.exports = (app) => {
    let userController = require('../controllers/userController');
    let forfaitController = require('../controllers/forfaitController');

    app.route('/forfaits/').get(forfaitController.list_all_forfait);

    app.route('/forfaits/:operateur/:nbJours')
        .get(forfaitController.list_forfaits_type);
}