var express = require('express');
const cors = require('cors');
// Create our app
var app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

app.use('/public',function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


/**
 * Server is about set up. Now track for css/js/images request  from the
 * browser directly. Send static resources from "./public" directory.
 */
app.use('/', express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
