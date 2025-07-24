// ----- server/index.js -----
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
