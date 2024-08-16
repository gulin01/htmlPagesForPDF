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


// 여행자_가입증명서(2인 이상)
app.get('/page_6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'multiple_traveler_join_hyonde.html'));
});


// 여행자_가입증명서(2인 이상_미성년자 포함)
app.get('/page_7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'multiple_traveler_minor_join_hyonde.html'));
});

// 여행자_가입증명서_4번
app.get('/page_8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'multiple_traveler_minor_join_hyonde_list.html'));
});



// 펫보험 가입 증명서
app.get('/page_9', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pet_join_hyonde_proof.html'));
});

// 소상공인 보험 가입 증명서
app.get('/page_10', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'business_join_hyonde_proof.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});