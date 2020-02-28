require('dotenv/config');
const routes = require('express').Router();
const appName = process.env.APP_NAME

routes.get('/', (req, res) => res.json({ message: `${appName} API V1` }));

routes.use('/crud', require('./crud'));
routes.use('/util', require('./util'));

module.exports = routes;
