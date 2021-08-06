import React, { useState, useEffect } from 'react';

const StarsBarCharts = props => {
  const ratings = props.ratings;

  const [totalRatings, setTotalRatings] = useState(0);
  const [fives, setFives] = useState(0);
  const [fours, setFours] = useState(0);
  const [threes, setThrees] = useState(0);
  const [twos, setTwos] = useState(0);
  const [ones, setOnes] = useState(0);
  const [ratingsArr, setRatingsArr] = useState([]);

  useEffect(() => {
    var totalReviews = 0;
    for (var key in ratings) {
      totalReviews += parseInt(ratings[key]);
    }
    setTotalRatings(totalReviews);
    if (ratings) {
      setFives(Math.round(Number(ratings[5]) / totalReviews * 100));
      setFours(Math.round(Number(ratings[4]) / totalReviews * 100));
      setThrees(Math.round(Number(ratings[3]) / totalReviews * 100));
      setTwos(Math.round(Number(ratings[2]) / totalReviews * 100));
      setOnes(Math.round(Number(ratings[1]) / totalReviews * 100));
    }
  })

  return (
    <div>
      <div className="ratings-flex-container bar-chart-container">
        <div data-key={5} onClick={() => props.handleReviewFilter(event)} className="number-of-stars">5 stars</div>
        <div className="gray-bar">
          <div className="green-bar" style={{ width: `${fives}%` }}></div>
        </div>
      </div>

      <div className="ratings-flex-container bar-chart-container">
        <div data-key={4} onClick={() => props.handleReviewFilter(event)} className="number-of-stars">4 stars</div>
        <div className="gray-bar">
          <div className="green-bar" style={{ width: `${fours}%` }}></div>
        </div>
      </div>

      <div className="ratings-flex-container bar-chart-container">
        <div data-key={3} onClick={() => props.handleReviewFilter(event)} className="number-of-stars">3 stars</div>
        <div className="gray-bar">
          <div className="green-bar" style={{ width: `${threes}%` }}></div>
        </div>
      </div>

      <div className="ratings-flex-container bar-chart-container">
        <div data-key={2} onClick={() => props.handleReviewFilter(event)} className="number-of-stars">2 stars</div>
        <div className="gray-bar">
          <div className="green-bar" style={{ width: `${twos}%` }}></div>
        </div>
      </div>

      <div className="ratings-flex-container bar-chart-container">
        <div data-key={1} onClick={() => props.handleReviewFilter(event)} className="number-of-stars">1 stars</div>
        <div className="gray-bar">
          <div className="green-bar" style={{ width: `${ones}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default StarsBarCharts;
