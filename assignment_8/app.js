'use strict';
const express = require ('express');
const app = express();

// Endpoints

app.get('/hello', function (req, res) {
  res.type('text');
  res.send('Hello World!');
});

app.get('/math/circle/:r', function (req, res) {
  let radius = req.params.r;
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  
  res.type('json');
  res.json({
    radius: radius,
    area: area,
    circumference: circumference
  });
});

app.get('/hello/name/:first?/:last?', function (req, res) {
  let first = req.params.first;
  let last = req.params.last;
  
  let missing = [];
  if (!first) {
    missing.push('first');
  }
  if (!last) {
    missing.push('last');
  }
  
  // If any parameters are missing, return error
  if (missing.length > 0) {
    res.type('text');
    res.status(400).send('Missing Required GET parameters: ' + missing.join(', '));
    return;
  }

  res.type('text');
  res.send('Hello ' + first + ' ' + last);
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

