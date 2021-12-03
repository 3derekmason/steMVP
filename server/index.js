
const express = require('express');
const path = require('path');

const db = require('./db/index.js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// Get all activities
app.get('/activities', (req, res) => {
  const query = "'SELECT * FROM activities'";
  db.query(query, (err, data) => {
    if (err) console.log(err);
    res.status(200).json(data.rows);
  })
})
// Get activities of a category
app.get('/activities/category', (req, res) => {
  const category = req.query.category;
  const query = `SELECT * FROM activities WHERE category = '${category}'`;
  db.query(query, (err, data) => {
    if (err) console.log(err);
    res.status(200).json(data.rows);
  })
})
// Add a new activity
app.post('/activities', (req, res) => {
  const query = 'INSERT INTO activities (title, description, length, group_size, category) VALUES ($1, $2, $3, $4, $5)';
  const title = req.body.title;
  const description = req.body.description;
  const length = req.body.duration;
  const groupSize = req.body.group_size;
  const category = req.body.category;
  db.query(query, [title, description, length, groupSize, category], (err, results) => {
    if (err) console.log(err);
    res.status(201).send(`Added ${title} to stemvp/activities!`);
  })
})


app.listen(7676, () => {
  console.log('Access granted to STEM Lab...');
});