'use strict';
const express = require ('express');
const app = express();

// Endpoints

app.get('/hello', function (req, res) {
  res.type('text');
  res.send('Hello World!');
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

