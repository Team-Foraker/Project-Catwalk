import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, API_TOKEN } from "/config.js";
import StarRating from "../shared/StarRating.jsx";
import RatingsCharts from "./RatingsCharts.jsx";
import ReviewsList from "./ReviewsList.jsx";
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
      <h1>Ratings & Reviews</h1>
      <div className="ratings-flex-container">
        <RatingsCharts />
        <div class="ratings-reviews-container">
          <div>
            <span>
              {reviews.length} reviews, sorted by
              <span>
                &nbsp;
                <select onChange={() => handleSort(event)}>
                  <option value="relevance">relevance</option>
                  <option value="helpfulness">helpfulness</option>
                  <option value="newest">newest</option>
                </select>
              </span>
            </span>
          </div>
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
