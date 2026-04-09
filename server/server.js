require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  res.json({
    status: "Server working ✅",
    env: process.env.NODE_ENV || "dev",
    note: process.env.CUSTOM_MSG || "Hello from backend"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});