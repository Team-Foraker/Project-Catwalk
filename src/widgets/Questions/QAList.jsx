import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import {sortAnswers, handleQuestionYes, handleAnswerYes} from './functions';

const { url, API_TOKEN } = require('../../../config.js');
const axios = require('axios');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const params = {
  product_id: 19089
}

const QAList = () => {
  const [questions, setQuestions] = useState([]);
  const [answersShown, setAnswersShown] = useState(2);
  const [helpful, setHelpful] = useState();
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
            {Object.values(question.answers).sort(sortAnswers).slice(0, answersShown).map((answers) => (
              <div key={answers.id}>
                <h5>A: {answers.body} </h5>
                <div className="answers_details">
                  <div className="useranswer">by {answers.answerer_name}, <Moment format='MMMM Do YYYY'>{answers.date}</Moment></div>
                  <div>Helpful?</div>
                  <div className="answeryes" onClick={handleAnswerYes} id={answers.id}>Yes ({answers.helpfulness})</div>
                  <div className="report">Report</div>
                </div>
              </div>
            ))}
            <div>
              <div>Question</div>
              <div>Helpful?</div>
              <div id={question.question_id} onClick={handleQuestionYes}>Yes ({question.question_helpfulness})</div>
              <div>Add Answer</div>
            </div>
          </div>
        ))}
        <div>
          <button className="qabutton" onClick={() => setAnswersShown(answersShown + 2)}>MORE ANSWERED QUESTIONS</button>
          <button className="qabutton">ADD A QUESTION +</button>
        </div>
      </ul>
    </div>
  )
}

export default QAList;