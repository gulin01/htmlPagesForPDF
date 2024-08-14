const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/page_1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page_1.html'));
});

app.get('/page_2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page_2.html'));
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});