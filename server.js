const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;
const host = '0.0.0.0';
const publicDir = __dirname + '/../dist';

// make express look in the public directory for assets (css/js/img)
app.use(express.static(publicDir));

// set the home page route
app.get('/', function(req, res) {
  // ejs render automatically looks in the views folder
  res.sendFile(publicDir + '/index.html');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
