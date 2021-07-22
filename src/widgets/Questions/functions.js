const {url, API_TOKEN} = require('../../../config.js');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = API_TOKEN;
/*

to use set up your axios using files like so:
const {url, API_TOKEN} = require('../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

then:
axios.get(url + '/<insert route>')

*/

module.exports = {

  getQuestions: function () {
    axios.get(url + '/qa/questions')
    .then((res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((err) => {
      console.log("Error in Get: ", err);
    })
  }
}