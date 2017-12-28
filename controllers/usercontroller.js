const usersDB = require('../models/usersDB');

module.exports = {

  index(req, res, next) {
    usersDB.findAll()
      .then((users) => {
        res.status(200).json({
          message: 'Here are existing users',
          data: {
            users,
          },
        });
      })
      .catch(err => next(err));
  },

  getOne(req, res, next) {
    usersDB.findOne(req.params.id)
      .then((users) => {
        res.status(200).json({
          message: 'User Found',
          data: {
            users,
          },
        });
      })
      .catch(err => next(err));
  },

};
