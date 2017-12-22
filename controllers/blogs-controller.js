const blogsDB = require('../models/blogsDB');

module.exports = {

  // get all blogs and set them in the res.local
  index(req, res, next) {
    blogsDB.findAll()
      .then((blogs) => {
        res.locals.blogs = blogs;
        next();
      })
      .catch(err => next(err));
  },


};