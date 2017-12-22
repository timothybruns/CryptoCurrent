const pgp = require('pg-promise')();
const config = require('../dbConfig/config');

const db = pgp(config);


module.exports = {

  findAll() {
    console.log("inside blogsDB", db)
    return db.many(`
      SELECT * FROM blogs
      `);
  },

};
