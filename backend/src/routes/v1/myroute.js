const routes = require('express').Router();
const MyRouteController = require('../../controllers/MyRouteController');

routes.get('/', MyRouteController.index);
routes.get('/:id', MyRouteController.show);
routes.post('/', MyRouteController.store);
routes.put('/:id', MyRouteController.update);
routes.delete('/:id', MyRouteController.destroy);

module.exports = routes;
