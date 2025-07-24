// ----- server/controllers/userController.js -----
const db = require('../config/db');

exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ name, email });
  });
};
