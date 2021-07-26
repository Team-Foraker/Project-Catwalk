import React from 'react';

const ReviewItem = props => {
  var review = props.review;
  return (
    <div className="review-item">
      <div>Star Rating here</div>
      <div>Date and username here</div>
      <div className="review-summary">
        {review.summary}
      </div>
      <div className="review-body">
        {review.body}
      </div>
      {
        review.recommend &&
        <div>&#10003; I recommend this product
        </div>
      }
      <div>Responses here</div>
      <div>Helpful and report here</div>
    </div>
  )
}

export default ReviewItem;