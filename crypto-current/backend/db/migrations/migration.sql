\c crypto_blog_dev

DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  password VARCHAR(16)
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  post VARCHAR(255),
  user_id INT REFERENCES users(id)
);





