import axios from "axios";
const number = 25;
// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchEmployees: function() {
    return axios.get(`https://randomuser.me/api/?results=${number}`)
    .then(res => res.data)
  }
};