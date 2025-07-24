// ----- server/config/db.js -----
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: '',
  database: 'appdb'
});
module.exports = pool;
