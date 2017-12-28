const express = require('express');

const userRoutes = express.Router();

// importing controller
const userController = require('../controllers/usercontroller');

// setup user routes

userRoutes.route('/:id')
  .get(userController.getOne);


userRoutes.route('/')
  .get(userController.index);

module.exports = userRoutes;
