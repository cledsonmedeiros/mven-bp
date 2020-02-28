const routes = require('express').Router();
const CrudController = require('../../controllers/CrudController');

const autenticarToken = require('../../middlewares/jwt')

routes.get('/', autenticarToken, CrudController.index);
routes.get('/:id', autenticarToken, CrudController.show);
routes.post('/', autenticarToken, CrudController.store);
routes.put('/:id', autenticarToken, CrudController.update);
routes.delete('/:id', autenticarToken, CrudController.destroy);

module.exports = routes;
