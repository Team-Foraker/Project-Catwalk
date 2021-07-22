module.exports = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  API_TOKEN: 'add your GitHub API token here'
};

/*

to use set up your axios using files like so:
const {url, API_TOKEN} = require('../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

then:
axios.get(url + '/<insert route>')

*/