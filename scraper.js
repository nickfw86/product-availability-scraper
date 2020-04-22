const cheerio = require("cheerio");
const axios = require("axios");
require("dotenv").config();
let products = require("./products.js");

for (let i = 0; i < products.length; i++){
let url = products[i].URL;

axios
  .get(url)
  .then(function (response) {
    // handle success
    const html = response.data;
    const $ = cheerio.load(html);
    const stockNoteContainer = $(".stock-note-container");
    const soldOut = $("p:contains(Item currently sold out)");

    if (soldOut.length > 0) {
      console.log(products[i].name + "is Out Of Stock");
    } else if (typeof stockNoteContainer[i].children[1] === "object") {
      let availability = stockNoteContainer[0].children[1].children[0].data;
      console.log(products[i].name + " is " + availability);
    } else {
      console.log(products[i].name + " is Available");
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}