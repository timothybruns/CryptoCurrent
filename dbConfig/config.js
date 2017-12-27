// const options = {
//   query: (e) => {
//     console.log(e.query);
//   },
// };

// const pgp = require('pg-promise')(options);

// const config = {
//   host:     process.env.DB_HOST || 'localhost',
//   port:     process.env.DB_PORT || 5432,
//   database: process.env.DB_NAME || 'crypto_blog_dev',
// };

// function setDatabase() {
//   return pgp(process.env.DATABASE_URL || config);
// }

// const db = setDatabase();

// module.exports = db;

// Connecting database and localhost

module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'creddit_users_dev',
};
