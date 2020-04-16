const cheerio = require("cheerio");
const axios = require("axios");
require('dotenv').config()
const url = process.env.TARGET_URL;

axios.get(url)
  .then(function (response) {
    // handle success
    const html = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });