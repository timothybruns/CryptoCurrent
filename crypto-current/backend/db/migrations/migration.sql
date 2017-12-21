\c crypto_blog_dev

DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS comments;

CREATE TABLE blog (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  post VARCHAR(255),
  user_id REFERENCES users(id);
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255);
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  user_id REFERENCES users(id),
  blog_id REFERENCES blog(id);
);
