const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// 가입이메일_현대해상화재보험
app.get('/page_1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'join-hyonde.html'));
});

// 가입이메일_DB손해보험
app.get('/page_2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'join-db.html'));
  });

  // 가입이메일_현대해상화재보험_ 펫보험
app.get('/page_3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'join-pet-hyonde.html'));
});


// 가입이메일_DB손해보험_펫보험
app.get('/page_4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'join-pet-db.html'));
});

// 여행자_가입증명서(1인)
app.get('/page_5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'single_traveler_join_hyonde.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});