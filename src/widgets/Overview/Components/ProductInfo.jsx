import React, {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.jsx';
import SocialMedia from './SocialMedia.jsx';
import AverageStarRating from '../../shared/AverageStarRating.jsx';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../../config.js')
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const ProductInfo = function({product, currentStyle}) {

  const [reviewCount, setReviewCount] = useState(0);
  const [average, setAverage] = useState(0);


  // axios.get(url + 'reviews?product_id=' + product.id + '&sort=newest&count=999999')
  useEffect( () => {
    if (product.id) {
      axios.get(url + 'reviews?product_id=' + product.id + '&sort=newest&count=999999')
        .then( (results) => {
          setReviewCount(results.data.results.length);
        })
        .catch( (error) => {
          throw new Error(error);
        })
    }
  }, [product]);

  useEffect( () => {
    if (product.id) {
      axios.get(url + 'reviews/meta?product_id=' + product.id)
        .then( (results) => {
          let ratings = Object.keys(results.data.ratings);
          let reviews = 0;
          var totalStars = 0;
          for (var i = 0; i < ratings.length; i++) {
            reviews += JSON.parse(results.data.ratings[ratings[i]]);
            totalStars += JSON.parse(results.data.ratings[ratings[i]]) * ratings[i]
          }
          let unroundedAverage = totalStars/reviews
          setAverage(unroundedAverage.toFixed(1))
        })
        .catch( (error) => {
          throw new Error(error);
        })
    } else {

    }
  }, [product])

  return (
    <div id="product-info">
      <div id="review-info">
      <AverageStarRating average={average} />
      {reviewCount
      ? <span id="review-link"><a href="#ratings">Read all {reviewCount} reviews</a></span>
      : <span></span>}
      </div>
      <span className="product">
        <p><h3>{product.category}</h3><h2>{product.name}</h2></p>
      </span>
      {currentStyle.sale_price
      ? <span><span className="old-price">${currentStyle.original_price.slice(0, currentStyle.original_price.length - 3)}</span><span className="sale-price">${currentStyle.sale_price.slice(0, currentStyle.sale_price.length - 3)}</span></span>
      : <span>${currentStyle.original_price.slice(0, currentStyle.original_price.length - 3)}</span>}
      {/* <SocialMedia /> */}
    </div>
  )
}

export default ProductInfo;