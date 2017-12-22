const express = require('express');

const blogsRoutes = express.Router();

// importing controllers
const blogController = require('../controllers/blogcontroller');

// setup blog routes

blogsRoutes.route('/:id')
  .get(blogController.getOne);

blogsRoutes.route('/')
  .get(blogController.index);


module.exports = blogsRoutes;
