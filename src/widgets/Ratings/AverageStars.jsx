import React, {useState, useEffect} from 'react';
import AverageStarRating from '../shared/AverageStarRating.jsx';

const AverageStars = props => {
  var ratings = props.ratings;

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    var totalReviews = 0;
    var totalStars = 0;
    for (var key in ratings) {
      totalReviews += parseInt(ratings[key]);
      totalStars += parseInt(ratings[key]) * key;
    }
    var average = totalStars/totalReviews;
    setAverageRating(average.toFixed(1));
  })

  return(
    <div className="averageRating-flex-container">
      <h1>{averageRating}</h1>
      <AverageStarRating average={averageRating}/>
    </div>
  )
}

export default AverageStars;