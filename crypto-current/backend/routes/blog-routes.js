const express = require('express');

const blogsRoutes = express.Router();

// importing controllers
const blogController = require('../controllers/blogcontroller');

// setup blog routes

blogsRoutes.route('/test')
           .get(blogController.test);

blogsRoutes.route('/')
           .get(blogController.index);


module.exports = blogsRoutes;
