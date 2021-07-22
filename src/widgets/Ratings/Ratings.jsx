import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url, API_TOKEN } from '/config.js';
import StarRating from '../shared/StarRating.jsx';

const Ratings = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=19289&sort=newest', { headers: { 'Authorization': API_TOKEN } })
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
      <StarRating />
    </div>
  )
}

export default Ratings;