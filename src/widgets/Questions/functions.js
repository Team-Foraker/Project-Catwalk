const { url, API_TOKEN } = require('../../../config.js');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

module.exports = {
  sortAnswers: function (a, b) {
    const answerA = a.helpfulness;
    const answerB = b.helpfulness;
    let comparison = 0;
    if (answerA > answerB) {
      comparison = -1;
    } else {
      comparison = 1;
    }
    return comparison;
  },
  handleQuestionYes: (e) => {
    let question = e.target.id;
    axios.put(url + `qa/questions/${question}/helpful`)
      .then((res) => {
        console.log("Question helpfullness updated", res);
      })
      .catch((err) => {
        console.log("Question helpfullness not updated", err);
      })
  },
  handleAnswerYes: (e) => {
    let answer = e.target.id;
    axios.put(url + `qa/answers/${answer}/helpful`)
      .then((res) => {
        console.log("Answer helpfullness updated", res);
      })
      .catch((err) => {
        console.log("Answer helpfullness not updated", err);
      })
  }
}