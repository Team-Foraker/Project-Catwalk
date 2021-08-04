import React, {useState, useEffect} from 'react';

const AverageStarRating = props => {

  const [average, setAverage] = useState(0);

  const roundAverage = (average) => {
      var inv = 1.0 / 0.25;
      return Math.round(average * inv) / inv;
  }

  useEffect(() => {
    if (props.average) {
      var newAv = parseFloat(props.average);
      newAv = roundAverage(newAv);
      newAv = ((newAv/5) * 100).toFixed(2)
      setAverage(newAv);
    }
  })

  return (
    <div className="star-chart-container">
      <div className="hollow-stars">
        <div className="solid-stars" style={{ display: 'flex', width: `${average}%` }}>
        </div>
      </div>
    </div>
  )
}

export default AverageStarRating;