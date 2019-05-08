let axios = require("axios");

// The getResults method retrieves Results from the Etsy server
// It accepts a "query" or term to search the result api for
const BASEURL = "https://openapi.etsy.com/v2/listings/active?";
const APIKEY = "api_key=zvc75b5f3o9khob7e0kd7nza";


let exportStuff = {
  search: function(query) {
    return axios.get(BASEURL + "category=" + query + "&" + APIKEY);
  }
};

module.exports = exportStuff;


