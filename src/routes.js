const express = require('express');
const multer = require('multer');
const multerConfig = require("./config/multer");
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

routes.post('/post', multer(multerConfig).single('file'), PostController.create);
routes.get('/posts', PostController.index);
routes.delete('/post/:id', PostController.deleteById);

routes.post('/faq', FaqController.create);
routes.get('/faqs', FaqController.index);
routes.delete('/faq/:id', FaqController.deleteById);

routes.post('/postInstagram', PostInstagramController.create);
routes.get('/postInstagram', PostInstagramController.index);
routes.delete('/postInstagram/:id', PostInstagramController.deleteById);

routes.post('slide', SlideController.create)

module.exports = routes;