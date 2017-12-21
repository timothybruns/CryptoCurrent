const express = require('express');

const blogsRoutes = express.Router();

// importing controllers
const blogsController = require('../controllers/blogs-controller');

// setup blog routes

blogsRoutes.route('/')
           .get(blogsController.index);




module.exports = blogsRoutes;
