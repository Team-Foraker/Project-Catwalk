import React from "react";
import moment from "moment";
import axios from "axios";
import {url, API_TOKEN} from "/config.js";

const ReviewItem = (props) => {
  var review = props.review;

  var updateHelpfulness = () => {
    axios
      .put(
        `${url}reviews/${review.review_id}/helpful`, { headers: { 'Authorization': API_TOKEN } }
      )
      .then((response) => {
        console.log(response);
      });
  };

  var reportReview = () => {
    axios.put(
      `${url}reviews/${review.review_id}/report`, { headers: { 'Authorization': API_TOKEN } }
    )
    .then(response => {
      console.log(response)
    })
  }

  return (
    <div className="review-item">
      <div className="ratings-flex-container">
        <div>
          Star Rating here
          <span>{review.rating}</span>
        </div>
        <div>
          <span>{review.reviewer_name}, </span>
          <span>{moment(review.date).format("LL")}</span>
        </div>
      </div>
      <div className="review-summary">{review.summary}</div>
      <div className="review-body">{review.body}</div>
      {review.recommend && <div>&#10003; I recommend this product</div>}
      <div>{review.response}</div>
      <div>
        <div>
          Helpful?{" "}
          <button id="helpfulness-yes" onClick={() => updateHelpfulness()}>
            Yes
          </button>
          (<span>{review.helpfulness})</span>
          <button id="review-report" onClick={() => reportReview()}>
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
