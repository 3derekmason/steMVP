
const express = require('express');
const path = require('path');

const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.send('steMVP');
})

app.listen(7676, () => {
  console.log('Access granted to STEM Lab...');
});