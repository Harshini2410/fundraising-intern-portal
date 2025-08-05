// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({
    name: 'Poornima Maharshini',
    referralCode: 'poornima2025',
    totalRaised: 1200, // dummy amount
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
