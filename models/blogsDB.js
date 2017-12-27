const db = require('../dbConfig/config');


module.exports = {

  findAll() {
    return db.many(`
      SELECT *
      FROM blogs
      JOIN users ON users.id = blogs.user_id
      JOIN tags ON tags.blog_id = blogs.id
      `);
  },

  /* the result will be an array of objects consisting of same blog information
  but all the comments.
  */
  findOne(id) {
    return db.many(`
      SELECT *
      FROM blogs
      JOIN users ON users.id = blogs.user_id
      JOIN tags ON tags.blog_id = blogs.id
      JOIN comments ON comments.blog_id = blogs.id
      WHERE blogs.id = $1
      `, id);
  },

  blogUpdate(blog) {
    return db.one(`
      UPDATE blogs
      SET
      title = $/title/,
      content = $/content/
      WHERE id = $/id/
      RETURNING *
    `, blog);
  },

};
