import React from 'react';

const AverageStarRating = props => {
  return (
    <div className="star-chart-container">
      <div className="hollow-stars">
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
      <div className="solid-stars">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
    </div>
  )
}

export default AverageStarRating;