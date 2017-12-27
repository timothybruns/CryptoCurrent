// requires all modules
!('NODE_ENV' in process.env) && require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// require npm serve-favicon
const favicon = require('serve-favicon');
const blogroutes = require('./routes/blogroutes.js');

// setup localhost POST based on env or 3000
const PORT = process.env.PORT || 3000;

// set express up
const app = express();

// modules for authentication, commented out in meantime.
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const passport = require('passport');

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

// set favicon path location
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

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

app.use('/api/blogs', blogroutes);

// catching illegal routes
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Opps, not good!',
  });
});

// setup localhost POST based on env or 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
