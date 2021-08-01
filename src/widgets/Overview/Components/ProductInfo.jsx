import React, {useState, useEffect} from 'react';
import StarRating from '../../shared/StarRating.jsx';
import SocialMedia from './SocialMedia.jsx';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../../config.js')
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const ProductInfo = function({product, currentStyle}) {

  const [reviewCount, setReviewCount] = useState(0);

  useEffect( () => {

    axios.get(url + 'reviews/meta?product_id=' + product.id)
      .then( (results) => {
        let ratings = Object.keys(results.data.ratings);
        let reviews = 0;
        for (var i = 0; i < ratings.length; i++) {
          reviews += JSON.parse(results.data.ratings[ratings[i]]);
        }
        setReviewCount(reviews)
      })
      .catch( (error) => {
        throw new Error(error);
      })
  }, [product])

  const productStyle = {
    gridrowStart: "1"
  }

  return (
    <div style={productStyle}>
      <StarRating />
      {reviewCount
      ? <span><a href="#ratings">Read all {reviewCount} reviews</a></span>
      : <span></span>}
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      {currentStyle.sale_price
      ? <span><s>${currentStyle.original_price}</s>  <span style={ {'color': 'red'}}>${currentStyle.sale_price}</span></span>
      : <span>${currentStyle.original_price}</span>}
      <SocialMedia />
    </div>
  )
}

export default ProductInfo;