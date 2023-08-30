import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const APIKEY = "?results=";

const exportedApi = {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query );
  }
}

// Export an object with a "search" method that searches the Giphy API for the passed query
export default exportedApi;
