import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import fontawesome from "@fortawesome/fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";

fontawesome.library.add(solid, regular);

const StarChart = (props) => {
  const [rating, setRating] = useState(2.5);
  var starArray = [];
  var ratingCopy = rating;
  while (ratingCopy >= 1) {
    starArray.push(1);
    ratingCopy--;
  }
  if (ratingCopy === 0.5) {
    starArray.push(0.5);
  }
  var remaining = 5 - starArray.length;
  for (var i = 0; i < remaining; i++) {
    starArray.push(0);
  }

  return (
    <div>
      {starArray.map(function (item, index) {
        if (item === 1) {
          return <i key={index} className="on fas fa-star"></i>;
        } else if (item === 0.5) {
          return (
            <i>
              <i className="fas fa-star-half fa-stack-2x"></i>
              <i className="off fas fa-star fa-stack-1x"></i>
            </i>
          )
        } else {
          return <i className="off fas fa-star"></i>
        }
      })}
    </div>
  );
  // return null;
};

export default StarChart;
