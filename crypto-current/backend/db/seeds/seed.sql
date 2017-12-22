\c crypto_blog_dev

INSERT INTO users(username, password)
  VALUES
  (
    'Dan',
    'danpw'
  ),
  (
    'Carson',
    'carsonpw'
  ),
  (
    'Tim',
    'timpw'
  ),
  (
    'Jon',
    'jonpw'
  );

INSERT INTO blogs(title, content, user_id)
  VALUES
  (
    'You want Crypto?',
    'Well you too bad',
    1
  ),
  (
    'You got crypto?',
    'Your life or crypto? Pick one',
    2
  ),
  (
    'Want to buy bitcoin? Read this',
    'Buy Theorem',
    3
  ),
  (
    'Interested in cryptocurrency?',
    'Ask me',
    4
  );

INSERT INTO tags (name, blog_id)
  VALUES
  (
    'tag1',
    1
  ),
  (
    'tag2',
    2
  ),
  (
    'tag3',
    3
  ),
  (
    'tag4',
    4
  );

INSERT INTO comments (comment, blog_id)
  VALUES
  (
    'comment1',
    1
  ),
  (
    'comment2',
    1
  ),
  (
    'comment3',
    2
  ),
  (
    'comment4',
    3
  );






