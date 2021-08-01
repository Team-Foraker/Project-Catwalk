import React, { useState, useEffect } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(solid, regular);

const Star = props => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return <div className="star-rating">
    {/* <span index={0} onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>&#9734;</span>
    <span index={1} onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>&#9734;</span>
    <span index={2} onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>&#9734;</span>
    <span index={3} onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>&#9734;</span>
    <span index={4} onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}>&#9734;</span> */}
  </div>
}

export default Star;