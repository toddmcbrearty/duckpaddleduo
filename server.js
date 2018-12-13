const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;
const publicDir = __dirname + '/../dist';

// set the home page route
app.get('/', function(req, res) {
  res.sendFile(publicDir + '/index.html');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
