const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const FaqController = require('./controllers/FaqController');
const PostInstagramController = require('./controllers/PostInstagramController');
const SlideController = require('./controllers/SlideController')

routes.get('/', (req, res)=> {
  return res.json('Bem-vindo à Ame API!')
})

routes.post('/user', UserController.create);
routes.delete('/user/:id', UserController.deleteById);
routes.put('/user/:id', UserController.updateById);
routes.get('/users', UserController.listUsers);

routes.post('/post', PostController.create);

routes.post('/faq', FaqController.create);

routes.post('/postInstagram', PostInstagramController.create);

routes.post('slide', SlideController.create)

module.exports = routes;