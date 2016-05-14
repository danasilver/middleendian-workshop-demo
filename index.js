// Require the express and body-parser dependencies.
var express = require('express');
var bodyParser = require('body-parser');

// Get the NODE_ENV variable if it exists, defaulting to 'development'.
// NODE_ENV will be set to 'production' on Heroku.
var env = process.env.NODE_ENV || 'development';

// Initialize the connection to the database, using
// the settings in our knexfile.js and the env variable
// to select the correct settings group (development or production).
// See: http://knexjs.org/#Installation-client
// See: http://knexjs.org/#knexfile
var knex = require('knex')(require('./knexfile')[env]);

// Create the express application.
// See: http://expressjs.com/en/4x/api.html
var app = express();

// Use body-parser middleware to parse the body
// of the POST request.
// See: https://github.com/expressjs/body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set the view engine to 'pug'.
// See: http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');

// Route a GET request to /
// Renders the home page (index.pug) with
// the list of courses in the database.
// See: http://expressjs.com/en/guide/routing.html
app.get('/', function(req, res) {
  knex('course').select('name', 'code')
  .then(function(courses) {
    res.render('index', {
      user: 'Dana',
      courses: courses
    });
  });
});

// Route a POST request to /
// We make the POST request from the form
// in index.pug to add courses to the database.
app.post('/', function(req, res) {
  knex('course').insert({
    name: req.body.name,
    code: req.body.code
  })
  .then(function(course) {
    res.redirect('/');
  });
});

// Get the port from process.env.PORT, defaulting to 3000
// for development and listen for connections.
// In production (Heroku) process.env.PORT is set to 80.
// See: http://expressjs.com/en/4x/api.html#app.listen
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
