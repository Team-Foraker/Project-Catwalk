import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiToken } from '/config.js'

const Ratings = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=19289&sort=newest', { headers: { 'Authorization': apiToken } })
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);


  return (
    <div>
      <h1>Ratings</h1>
    </div>
  )
}

export default Ratings;