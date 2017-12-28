const db = require('../dbConfig/config');

module.exports = {

  findAll() {
    return db.many() (`
      SELECT * FROM users
      `)
  }

};
