// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var path       = require('path')
var bodyParser = require('body-parser');

var app        = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let's load all our assets --> css
app.get('/public/*', function(req, res){
  res.sendfile(__dirname + req.url);
});

var port = process.env.PORT || 1234;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
});

router.post('/api/toss', function(req, res) {
    console.log('the ball has been tossed')
});



// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /
app.use('/', router);
//
// // START THE SERVER
// // =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
