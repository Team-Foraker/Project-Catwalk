import React from 'react';
import StarRating from '../../shared/StarRating.jsx';

const ProductInfo = function({product}) {
  return (
    <div>
      <StarRating />
      {/* Reviews link */}
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <span>${product.default_price}</span>
    </div>
  )
}

export default ProductInfo;