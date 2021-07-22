import React from 'react';

const ProductInfo = function({product}) {
  return (
    <div>
      {/* Stars Component */}
      {/* Reviews link */}
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <span>${product.default_price}</span>
    </div>
  )
}

export default ProductInfo;