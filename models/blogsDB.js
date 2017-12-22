const db = require('../dbConfig/config');

const blogs = {};

blogs.findAll = () => {
  return db.many(`
    SELECT * FROM blogs
    `);
}

// blog.findById = (id) => {
//   return db.one(`
//     SELECT * FROM blog
//     WHERE id = $1
//     `, [id]);
// }

// blog.create = (blog) => {
//   return db.one(`
//     INSERT INTO blog
//     (title, post, user_id)
//     VALUES ($/title/, $/post/, $/user_id/)
//     RETURNING *
//     `, blog);
// }

module.exports = blogs;
