const express = require('express');

const userRoutes = express.Router();

// importing controllers
const userController = require('../controllers/usercontroller');

// setup blog routes

userRoutes.route('/:id')
  .get(userController.getOne)
  .put(userController.blogUpdate)
  .delete(userController.blogDelete);

userRoutes.route('/')
  .get(userController.index)
  .post(userController.userCreate);

module.exports = userRoutes;
