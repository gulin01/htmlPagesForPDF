const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// -------------------------------------------현대해상화재보험 -------------------------------------


// 가입이메일_현대해상화재보험
app.get('/hyonde/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hyonde/join_mail.html'));
});



  // 가입이메일_현대해상화재보험_ 펫보험
app.get('/hyonde/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hyonde/join_pet_mail.html'));
});


// 여행자_가입증명서(1인)
app.get('/hyonde/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/single_traveler_join.html'));
});


// 여행자_영문_가입증명서(1인)
app.get('/hyonde/3/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/single_traveler_join_ENG.html'));
});

// 여행자_가입증명서(2인 이상)
app.get('/hyonde/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_join.html'));
});

//여행자_영문_가입증명서(2인 이상)
app.get('/hyonde/4/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_join_ENG.html'));
});



// 여행자_가입증명서(2인 이상_미성년자 포함)
app.get('/hyonde/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_minor_join.html'));
});


// 여행자_영문_가입증명서(2인 이상_미성년자 포함)
app.get('/hyonde/5/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_minor_join_ENG.html'));
});
// 여행자_가입증명서_4번
app.get('/hyonde/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_join_list.html'));
});


// 여행자_영문_가입증명서_4번
app.get('/hyonde/6/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/multiple_traveler_join_list_ENG.html'));
});



// 펫보험 가입 증명서
app.get('/hyonde/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/pet_join_proof.html'));
});

// 소상공인 보험 가입 증명서
app.get('/hyonde/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/hyonde/business_join_proof.html'));
});







// -------------------------------------------DB손해보험 -------------------------------------


// 가입이메일
app.get('/db/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/join_mail.html'));
});


// 가입이메일_펫보험
app.get('/db/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/join_pet_mail.html'));
});


// 여행자_가입증명서(1인)
app.get('/db/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/single_traveler_join.html'));
});


// 여행자_영문_가입증명서(1인)
app.get('/db/3/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/single_traveler_join_ENG.html'));
});

// 여행자_가입증명서(2인 이상)
app.get('/db/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_join.html'));
});

//여행자_영문_가입증명서(2인 이상)
app.get('/db/4/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_join_ENG.html'));
});



// 여행자_가입증명서(2인 이상_미성년자 포함)
app.get('/db/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_minor_join.html'));
});


// 여행자_영문_가입증명서(2인 이상_미성년자 포함)
app.get('/db/5/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_minor_join_ENG.html'));
});
// 여행자_가입증명서_4번
app.get('/db/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_join_list.html'));
});


// 여행자_영문_가입증명서_4번
app.get('/db/6/eng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/multiple_traveler_join_list_ENG.html'));
});



// 펫보험 가입 증명서
app.get('/db/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/pet_join_proof.html'));
});

// 소상공인 보험 가입 증명서
app.get('/db/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/db/business_join_proof.html'));
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});