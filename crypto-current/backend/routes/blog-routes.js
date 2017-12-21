const express = require('express');
const blogsRoutes = express.Router();

// importing controllers
const blogsController = require('../controllers/blogs-controller');

// setup blog routes
// blogsRoutes.route('/:id')
//            .get(blogsController.show)
//            .put(blogsController.update)
//            .delete(blogsController.delete);

// blogsRoutes.route('/')
//            .get(blogsController.index)
//            .post(blogsController.create);

module.exports = blogsRoutes;
