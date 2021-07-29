import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem.jsx";

const ReviewsList = props => {
  var reviewsArr = props.reviews;
  const [itemsToShow, setItemsToShow] = useState(2);


  return (
    <div>

      Reviews here

      {props.reviews.map((rev, index) => {
        if (index < itemsToShow) {
          return <ReviewItem key={rev.review_id} review={rev} index={index} />;
        }
      })}

      <div>
        {itemsToShow < props.reviews.length && (
          <button onClick={() => setItemsToShow(itemsToShow + 2)}>
            MORE REVIEWS
          </button>
        )}
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  );
};

export default ReviewsList;
