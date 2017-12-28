const express = require('express');

const blogsRoutes = express.Router();

// importing controllers
const blogController = require('../controllers/blogcontroller');

// setup blog routes

blogsRoutes.route('/:id')
  .get(blogController.getOne)
  .put(blogController.blogUpdate)
  .delete(blogController.blogDelete);

blogsRoutes.route('/')
  .get(blogController.index)
  .post(blogController.blogCreate);

module.exports = blogsRoutes;
