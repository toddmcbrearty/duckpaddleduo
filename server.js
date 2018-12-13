const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// the __dirname is the current directory from where the script is running
const publicPath = path.join(__dirname, 'dist');
const indexPath = path.join(publicPath, 'index.html');

app.use(express.static(publicPath));

// send the user to index html page inspite of the url
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port);
});
