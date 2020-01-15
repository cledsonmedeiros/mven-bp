require('dotenv/config');
const express = require('express');
const cors = require('cors');

const app = express();

// CORS
app.use(cors());

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROTAS
require('./src/routes')(app);

module.exports = app;
