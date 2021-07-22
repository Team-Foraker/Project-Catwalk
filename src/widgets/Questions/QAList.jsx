import React, { useState, useEffect} from 'react';
import {getQuestions} from './functions.js';


const QAList = (props) => {
  const [questions] = useState([]);
  useEffect(() => {
    getQuestions().then(data => {
      console.log(data);
    })

  console.log(questions);
}, []);

  return (
    <div>
     <h3>List of Questions</h3>
    </div>
  )
}

export default QAList;