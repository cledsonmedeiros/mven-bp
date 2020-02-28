require('dotenv/config');
const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ message: `${process.env.APP_NAME} API V1` }));

routes.use('/crud', require('./crud'));
routes.use('/util', require('./util'));

module.exports = routes;
