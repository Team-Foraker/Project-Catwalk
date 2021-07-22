import React, { useState, useEffect } from 'react';
//const {getQuestions} = require('./functions')
const { url, API_TOKEN } = require('../../../config.js');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const params = {
  product_id: 19089
}

const QAListItem = (props) => {
  return (
    <div>

    </div>
  )
}

const QAList = (props) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(url + 'qa/questions', { params: params })
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log("Error in Get Questions: ", err);
      })
  }, []);

  return (
    <div>
      <h3>List of Questions</h3>
      <ul>{questions.map((question) => (
        <p key={question.question_id}> Q: {question.question_body} </p>
        )
        )}
    </ul>
    </div>
  )
}

export default QAList;