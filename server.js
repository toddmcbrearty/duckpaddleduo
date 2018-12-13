const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + '/dist'));

const port = process.env.PORT || 3000;
app.listen(os.Getenv('PORT'), () => {
  console.log('Listening on port ' + os.Getenv('PORT'));
});
