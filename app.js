const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is Kuldeep Rana!');
});

// Listen on all interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
