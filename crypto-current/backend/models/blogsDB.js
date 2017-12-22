const pgp = require('pg-promise')();
const config = require('../dbConfig/config');

const db = pgp(config);


module.exports = {

  findAll() {
    console.log("inside blogsDB", db)
    return db.many(`
      SELECT *
      FROM blogs
      JOIN users ON users.id = blogs.user_id
      JOIN tags ON tags.blog_id = blogs.id
      `);
  },

};
