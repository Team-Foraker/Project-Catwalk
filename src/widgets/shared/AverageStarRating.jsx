import React from 'react';

const AverageStarRating = props => {
  var average = (props.average * 16).toFixed(2);

  return (
    <div className="star-chart-container">
      <div className="hollow-stars">
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
      <div className="solid-stars" style={{width: `${average}px`}}>
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