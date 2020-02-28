const routes = require('express').Router();
const UtilController = require('../../controllers/UtilController');

routes.get('/datahora', UtilController.atual);

module.exports = routes;
