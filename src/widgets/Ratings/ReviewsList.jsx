import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewsList = props => {
  return (
    <div className="ratings-reviews-container">
      Reviews here
        {
          props.reviews.map(rev => {
            return <ReviewItem key={rev.review_id} review={rev}/>
          })
        }
    </div>
  )
};

export default ReviewsList;