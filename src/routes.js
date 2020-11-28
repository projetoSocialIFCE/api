const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/', (req, res)=> {
  return res.json('Bem-vindo à Ame API!')
})

routes.post('/user', UserController.create);

module.exports = routes;