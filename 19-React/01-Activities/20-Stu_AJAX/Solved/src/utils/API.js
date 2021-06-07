import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=b6c6f4d1";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
