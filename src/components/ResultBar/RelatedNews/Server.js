const express = require('express');
const axios = require('axios');
const app = express();
require("dotenv").config();
const cors = require('cors')
const PORT = 5000;

app.use(express.json());
app.use(cors())

app.get('/search', (req, res) => {
  axios.get(`https://openapi.naver.com/v1/search/news.json?query=${req.query.query}&display=100&sort=${req.query.sort}`, {
    headers: {
      'X-Naver-Client-Id': 'wQar1yZR0GyPKK35iLjc',
      'X-Naver-Client-Secret': 'lxhxpGYLGa',
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