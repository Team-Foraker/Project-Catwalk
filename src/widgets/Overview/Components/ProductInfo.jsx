import React from 'react';
import StarRating from '../../shared/StarRating.jsx';

const ProductInfo = function({product, currentStyle}) {
  return (
    <div>
      <StarRating />
      {/* Reviews link */}
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      {currentStyle.sale_price
      ? <span><s>${currentStyle.original_price}</s>  <span style={ {'color': 'red'}}>${currentStyle.sale_price}</span></span>
      : <span>${currentStyle.original_price}</span>}
    </div>
  )
}

export default ProductInfo;