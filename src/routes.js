const express = require('express');
const routes = express.Router();

const hello = require('./controllers/Hello');

routes.get('/teste', hello.teste);

module.exports = routes;