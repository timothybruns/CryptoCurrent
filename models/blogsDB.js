const db = require('../dbConfig/config');


module.exports = {

  findAll() {
    return db.many(`
      SELECT *
      FROM blogs
      JOIN users ON users.id = blogs.user_id
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

  destroy(id) {
    return db.none(`
      DELETE
      FROM blogs
      WHERE id = $1
    `, id);
  },

  save(blog) {
    return db.one(`
      INSERT INTO blogs
      (title, content, user_id)
      VALUES ($/title/, $/content/, $/user_id/)
      RETURNING *
      `, blog);
  },

};
