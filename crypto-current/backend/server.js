// requires all modules
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const blogroute = require('./routes/blog-routes.js');

// set express up
const app = express();

// modules for authentication, commented out in meantime.
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const passport = require('passport');

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// modules for authentication, commented out in meantime.
// app.use(cookieParser());
// app.use(
//   session({
//     key: process.env.SECRET_KEY,
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//   }),
//   );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static('public'));

// setup route for all blogs
app.use('/blogs', blogroute);

// setup server root folder
app.get('/', (req, res) => {
  res.send('Hello World! Our group is AWESOME!');
});

// catching illegal routes
app.use('*', (req,res) => {
  res.status(400).json({
    message: 'Opps, not good!',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});

// setup localhost POST based on env or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
