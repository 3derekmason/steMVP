
const Pool = require('pg').Pool
const activities = new Pool({
  user: 'derekmason',
  host: 'localhost',
  database: 'activities',
  password: 'password',
  port: 3333,
})

module.exports = activities;