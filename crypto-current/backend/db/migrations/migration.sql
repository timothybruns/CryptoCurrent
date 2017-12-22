\c crypto_blog_dev

DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS comments;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) UNIQUE NOT NULL,
  password VARCHAR(25) NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  content VARCHAR(255),
  user_id INT REFERENCES users(id)
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  blog_id INT REFERENCES blogs(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment VARCHAR(255),
  blog_id INT REFERENCES blogs(id)
);





