const db = require('../dbConfig/config');

const blog = {};

blog.findAll = () => {
  return db.many(`
    SELECT * FROM blogs
    INNER JOIN users
    ON users.id = blogs.user_id
    ORDER BY blogs.id
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

