const express = require('express');
const multer = require('multer');
const multerConfig = require("./config/multer");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const FaqController = require('./controllers/FaqController');
const PostInstagramController = require('./controllers/PostInstagramController');
const PostParceiroController = require('./controllers/PostParceiroController')
const SlideController = require('./controllers/SlideController');
const AccountController = require('./controllers/AccountController');
const authController = require('./controllers/authController');
const authMiddleware = require('../src/middlewares/auth');

routes.get('/', (req, res)=> {
  return res.json('Bem-vindo à Ame API!')
})

routes.post('/user', UserController.create);
routes.delete('/user/:id', UserController.deleteById);
routes.put('/user/:id', UserController.updateById);
routes.get('/users', UserController.listUsers);

routes.post('/post', authMiddleware, multer(multerConfig).single('file'), PostController.create);
routes.get('/posts', PostController.index);
routes.delete('/post/:id', PostController.deleteById);

routes.post('/postParceiro', authMiddleware, multer(multerConfig).single('file'), PostParceiroController.create);
routes.get('/postsParceiro', PostParceiroController.index);
routes.delete('/postParceiro/:id', PostParceiroController.deleteById);

routes.post('/faq', FaqController.create);
routes.get('/faqs', FaqController.index);
routes.delete('/faq/:id', FaqController.deleteById);

routes.post('/postInstagram', PostInstagramController.create);
routes.get('/postInstagram', PostInstagramController.index);
routes.delete('/postInstagram/:id', PostInstagramController.deleteById);

routes.post('/register', authController.register);
routes.post('/auth', authController.authenticate);
routes.post('/forgot_password', authController.forgot_password);
routes.post('/reset_password', authController.reset_password);

routes.post('slide', SlideController.create);

routes.post('/account', AccountController.create);
routes.post('/total', AccountController.createTotal);
routes.put('/value/:id', AccountController.updateAccount);
routes.get('/accounts', AccountController.index);
routes.delete('/account/:id', AccountController.deleteById);

module.exports = routes;