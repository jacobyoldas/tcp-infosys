const axios = require("axios");

function MovieSearch() {}

MovieSearch.prototype.buildUrl = function(movie) {
  return `https://www.omdbapi.com/?t=${movie}&apikey=b6c6f4d1`;
};

MovieSearch.prototype.search = function(movie) {
  return axios.get(this.buildUrl(movie));
};

module.exports = MovieSearch;
