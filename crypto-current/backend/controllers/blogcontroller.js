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
      .catch(next);
  },

  test(req, res, next) {
    res.json({
    message: 'Inside blog controller test route',
  });
  },

};
