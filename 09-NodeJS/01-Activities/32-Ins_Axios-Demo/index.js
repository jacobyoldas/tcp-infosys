const axios = require("axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=b6c6f4d1")
  .then(function(res) {
    console.log(res.data);
  });
