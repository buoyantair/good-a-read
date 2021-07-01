const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/book/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/author/:id', (req, res) => {
  res.send(req.params.id);
})

app.get('/search/', (req, res) => {
  res.send('search result');
})
