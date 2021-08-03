import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem.jsx";
import CreateReview from './CreateReview.jsx'

const ReviewsList = props => {
  var reviewsArr = props.reviews;
  const [itemsToShow, setItemsToShow] = useState(2);
  const [showModal, setShowModal] = useState(false);

  var modalToggle = () => {
    setShowModal(true);
  }

  var modalOff = () => {
    setShowModal(false);
  }

  return (
    <div>
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
        <button onClick={modalToggle}>ADD A REVIEW +</button>
      </div>
      <CreateReview product={props.product} status={showModal} modalOff={modalOff} characteristics={props.characteristics}/>
    </div>
  );
};

export default ReviewsList;
