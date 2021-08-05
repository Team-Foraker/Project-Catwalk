import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { url, API_TOKEN } from "/config.js";
import AverageStarRating from '../shared/AverageStarRating.jsx';
import ReviewBody from './ReviewBody.jsx';

const ReviewItem = (props) => {
  var review = props.review;
  const [helpCount, setHelpCount] = useState(0);
  const [helpClicked, setHelpClicked] = useState(false);

  useEffect(() => {
    if (review) { setHelpCount(props.review.helpfulness) }
  }, [props.review.helpfulness]);

  var updateHelpfulness = () => {
    axios.put(`${url}reviews/${review.review_id}/helpful`, { headers: { 'Authorization': API_TOKEN } })
      .then((response) => {
        var newHelpCount = helpCount + 1;
        setHelpCount(newHelpCount);
        setHelpClicked(true);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  var reportReview = () => {
    axios.put(`${url}reviews/${review.review_id}/report`, { headers: { 'Authorization': API_TOKEN } })
      .then(response => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="review-item">
      <div className="ratings-flex-container">
        <div>
          <AverageStarRating average={review.rating} />
        </div>
        <div>
          <span>{review.reviewer_name}, </span>
          <span>{moment(review.date).format("LL")}</span>
        </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">
        <ReviewBody body={review.body} />
        <div>
          {
            review.photos.map((photo) => {
              return <img key={photo.url} className="review-thumbnail" src={photo.url} width="50px" height="50px" />
            })
          }
        </div>
      </div>
      {review.recommend && <div>&#10003; I recommend this product</div>}
      <div>{review.response}</div>
      {
        !helpClicked &&
        <div>
          Helpful?
          <button id="helpfulness-yes" onClick={() => updateHelpfulness()}>
            Yes
          </button>
          <span className="helpfulness-count">({helpCount})</span>
          <button id="review-report" onClick={() => reportReview()}>
            Report
          </button>
        </div>
      }
      {
        helpClicked &&
        <div>
          <div> Thank you for your feedback <span>Helpful? </span> <span className="helpfulness-count">({helpCount})</span></div>
        </div>
      }
      <div>
      </div>
    </div>
  );
};

export default ReviewItem;
