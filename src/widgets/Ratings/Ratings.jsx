import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, API_TOKEN } from "/config.js";
import StarRating from "../shared/StarRating.jsx";
import RatingsCharts from "./RatingsCharts.jsx";
import ReviewsList from "./ReviewsList.jsx";
import Sort from "./Sort.jsx";
import Star from "../shared/Star.jsx";

const Ratings = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}reviews?product_id=19289&sort=newest`, {
        headers: { Authorization: API_TOKEN },
      })
      .then((response) => {
        var sortedReviews = sortByRelevance(response.data.results);
        setReviews(sortedReviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var sortByRelevance = (reviews) => {
    var sortedReviews = reviews.sort((a, b) => {
      if (b.date == a.date) {
        return b.helpfulness - a.helpfulness;
      }
      return new Date(b.date) - new Date(a.date);
    });
    return sortedReviews;
  }

  var handleSort = (event) => {
    var sortedReviews = [...reviews];
    var sortBy = event.target.value;

    if (sortBy === "helpfulness") {
      sortedReviews = sortedReviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      setReviews(sortedReviews);
    } else if (sortBy === 'newest') {
      sortedReviews = sortedReviews.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setReviews(sortedReviews);
    } else if (sortBy === 'relevance') {
      sortedReviews = sortByRelevance(sortedReviews);
      setReviews(sortedReviews);
    }
  };

  return (
    <div className="ratings-main-component">
      <div>RATINGS & REVIEWS</div>
      <div className="ratings-flex-container">
        <RatingsCharts reviews={reviews} />
        <div className="ratings-reviews-container">
          <div>
            <Sort reviews={reviews} handleSort={handleSort} />
            <ReviewsList reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
