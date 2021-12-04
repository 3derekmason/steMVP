const Pool = require("pg").Pool;
const activities = new Pool({
  user: "derekmason",
  host: "localhost",
  database: "stemvp",
  password: "password",
  port: 5432,
});

module.exports = activities;
