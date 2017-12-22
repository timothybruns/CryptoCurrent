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


INSERT INTO blogs(title,post,user_id)
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

