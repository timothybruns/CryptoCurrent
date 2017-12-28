const db = require('../dbConfig/config');

module.exports = {

  findAll() {
    return db.many(`
      SELECT * FROM users
      `);
  },

  findOne(id) {
    return db.one(`
      SELECT * FROM users
      WHERE id = $1
      `, id);
  },

};
