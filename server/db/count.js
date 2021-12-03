
const Pool = require('pg').Pool
const count = new Pool({
  user: 'derekmason',
  host: 'localhost',
  database: 'activity_count',
  password: 'password',
  port: 1234,
})

module.exports = count;