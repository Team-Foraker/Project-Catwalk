import React from 'react';
import StarRating from '../../shared/StarRating.jsx';

const ProductInfo = function({product, style}) {
  return (
    <div>
      <StarRating />
      {/* Reviews link */}
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      {style.sale_price
      ? <span><s>${style.original_price}</s>  <span style={ {'color': 'red'}}>${style.sale_price}</span></span>
      : <span>${style.original_price}</span>}
    </div>
  )
}

export default ProductInfo;