import React from 'react';

const ReviewItem = props => {
  var review = props.review;

  return (
    <div className="review-item">
      <div className="ratings-flex-container">
        <div>Star Rating here
          <span>{review.rating}</span>
        </div>
        <div>
          <span>{review.reviewer_name}, </span>
          <span>{review.date}</span>
        </div>
      </div>
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
      <div>{review.response}</div>
      <div>
        <div>Was this review helpful? Yes(<span>{review.helpfulness})</span></div>
        <div></div>
      </div>
    </div>
  )
}

export default ReviewItem;