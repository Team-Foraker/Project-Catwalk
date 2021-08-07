import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, API_TOKEN } from "/config.js";
import StarRating from "../shared/StarRating.jsx";
import RatingsCharts from "./RatingsCharts.jsx";
import ReviewsList from "./ReviewsList.jsx";
import Sort from "./Sort.jsx";

const Ratings = (props) => {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [filteredRev, setFilteredRev] = useState([])

  var apiFetch = (sorting) => {
    axios
      .get(`${url}reviews?product_id=${props.product.id}&sort=${sorting}&count=999999`, {
        headers: { Authorization: API_TOKEN },
      })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (props.product.id !== undefined) {

      apiFetch('relevant');

      axios.get(`${url}reviews/meta?product_id=${props.product.id}`, {
        headers: { Authorization: API_TOKEN },
      })
        .then(response => {
          setMetaData(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (reviews) {
      setFilteredRev(reviews)
    }
  }, [props.product.id, reviews]);

  var handleSort = (event) => {
    var sortBy = event.target.value;

    if (sortBy === "helpfulness") {
      apiFetch('helpful');
      setFilteredRev(reviews);
    } else if (sortBy === 'newest') {
      apiFetch('newest')
      setFilteredRev(reviews);
    } else if (sortBy === 'relevance') {
      apiFetch('relevant')
      setFilteredRev(reviews);
    }
  };

  var handleReviewFilter = (event) => {
    var rating = parseInt(event.target.getAttribute('data-key'));
    var filteredList = reviews.filter((revItem) => {
      return revItem.rating === rating;
    });
    setFilteredRev(filteredList);
  }

  return (
    <div className="ratings-main-component" id="ratings">
      <h3 className="ratings-headline">RATINGS & REVIEWS</h3>
      <div className="ratings-flex-container">
        <RatingsCharts handleReviewFilter={handleReviewFilter} reviews={reviews} metaData={metaData} />
        <div className="ratings-reviews-container">
          <div>
            <Sort reviews={reviews} handleSort={handleSort} />
            <ReviewsList product={props.product.id} reviews={filteredRev} characteristics={metaData.characteristics} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
