var express = require('express');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(require('./knexfile')[env]);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  knex('course').select('name', 'code')
  .then(function(courses) {
    res.render('index', {
      user: 'Dana',
      courses: courses
    });
  });
});

app.post('/', function(req, res) {
  knex('course').insert({
    name: req.body.name,
    code: req.body.code
  })
  .then(function(course) {
    res.redirect('/');
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
