const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route to serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'indux.html'));
});

// Listen on all interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
