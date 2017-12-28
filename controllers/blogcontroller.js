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

  blogUpdate(req, res, next) {
    blogsDB.findOne(req.params.id)
      .then((blog) => {
        return blog.blogUpdate({
          title:   req.body.title,
          content: req.body.content,
          user_id: req.body.user_id,
        });
      })
      .then((blog) => {
        res.status(202).json({
          message: 'Updated Blog',
          data: {
            blog,
          },
        });
      })
      .catch(err => next(err));
  },

  blogDelete(req, res, next) {
    blogsDB.destroy(req.params.id)
      .then(() => {
        res.status(202).json({
          message: 'Blog deleted',
        });
      })
      .catch(err => next(err));
  },

  blogCreate(req, res, next) {
    blogsDB.save(req.body)
      .then((blog) => {
        res.json({
          message: 'Blog Created',
          data: { blog },
        });
      }).catch(err => next(err));
  },

};

