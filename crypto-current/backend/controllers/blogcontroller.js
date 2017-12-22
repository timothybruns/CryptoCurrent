const blogsDB = require('../models/blogsDB');

module.exports = {

  // get all blogs and set them in the res.local
  index(req, res, next) {
    blogsDB.findAll()
      .then((blogs) => {
        res.status(200).json({
          message: 'ok',
          data: {
            blogs,
          },
        });
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    blogsDB.findOne(req.params.id)
      .then((blog) => {
        res.status(200).json({
          message: 'ok',
          data: {
            blog,
          },
        });
      })
      .catch(err => next(err));
  },


};
