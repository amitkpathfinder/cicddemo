// ----- server/index.js -----
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));

// API example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Catch-all for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
*/
