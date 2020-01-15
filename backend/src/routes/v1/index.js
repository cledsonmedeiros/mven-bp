const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to mven-bp' }));

routes.use('/myroute', require('./myroute'));

module.exports = routes;
