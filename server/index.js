const express = require("express");
const http = require("http");
const path = require("path");
const pool = require("./db/config");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/public")));

// Get all activities
const getActivites = (req, res) => {
  const query = "SELECT * FROM activities ORDER BY activity_id DESC";
  pool.query(query, (err, data) => {
    if (err) console.log(err);
    res.status(200).json(data.rows);
  });
};
// Post activity
const postActivity = (req, res) => {
  const query =
    "INSERT INTO activities (title, description, length, group_size, category) VALUES ($1, $2, $3, $4, $5)";
  const title = req.body.title;
  const description = req.body.description;
  const length = req.body.duration;
  const groupSize = req.body.group_size;
  const category = req.body.category;
  pool.query(
    query,
    [title, description, length, groupSize, category],
    (err, results) => {
      if (err) console.log(err);
      res.status(201).send(`Added ${title} to stemvp/activities!`);
    }
  );
};
// Get activities of a category
const getActivityCategory = (req, res) => {
  const category = req.query.category;
  const query = `SELECT * FROM activities WHERE category = '${category}'`;
  pool.query(query, (err, data) => {
    if (err) console.log(err);
    res.status(200).json(data.rows);
  });
};

const deleteActivity = (req, res) => {
  const activityToRemove = req.query.title;
  const query = `DELETE FROM activities WHERE title = ${activityToRemove}`;
  pool.query(query, (err, data) => {
    if (err) console.log(err);
    res.status(204).json(data);
  });
};

app.route("/activities").get(getActivites).post(postActivity);
app.route("/activities/category").get(getActivityCategory);
app.route("/activities/title").delete(deleteActivity);

const server = http.createServer(app);
server.listen(process.env.PORT || 7676, () => {
  console.log("Access granted to STEM Lab...");
});
