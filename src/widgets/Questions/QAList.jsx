import React, { useState, useEffect } from 'react';
//const {getQuestions} = require('./functions')
const { url, API_TOKEN } = require('../../../config.js');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const params = {
  product_id: 19089
}

const QAList = () => {
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

      <ul>
       {questions.map((question) => (
        <div key={question.question_id}>
           <h4>Q: {question.question_body} </h4>
           {Object.values(question.answers).map((answers) => (
             <div key={answers.id}>
                <h5>A: {answers.body} </h5>
             </div>
           ))}
          </div>
        ))}
    </ul>
   </div>
  )
}

export default QAList;