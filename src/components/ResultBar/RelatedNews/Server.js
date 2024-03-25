const express = require('express');
const axios = require('axios');
const app = express();
require("dotenv").config();
const cors = require('cors')
const PORT = 5000;

app.use(express.json());
app.use(cors())

app.get('/search', (req, res) => {
  console.log(req.query)
  axios.get(`https://openapi.naver.com/v1/search/news.json?query=${req.query.query}&sort=${req.query.sort}`, {
    headers: {
      'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET_KEY,
    },
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.error('Error fetching data from Naver API:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from Naver API' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});