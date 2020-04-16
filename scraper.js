const cheerio = require("cheerio");
const axios = require("axios");
require('dotenv').config()
const url = process.env.TARGET_URL;
let products = require('./products.js');

axios.get(url)
  .then(function (response) {
    // handle success
    const html = response.data
    const $ = cheerio.load(html);
    const stockNoteBackorder = $(".stock-note.backordered");
    const dateAvailable = stockNoteBackorder[0].children[0].data;
    console.log(dateAvailable);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });