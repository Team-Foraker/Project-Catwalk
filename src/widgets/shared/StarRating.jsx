import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import fontawesome from "@fortawesome/fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";

fontawesome.library.add(solid, regular);

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <i className="fas fa-star"></i>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
