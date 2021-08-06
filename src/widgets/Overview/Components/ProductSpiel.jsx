import React from 'react';

const ProductSpiel = function({product}) {

  return (
    <div id="product-spiel">
      <span><h3>{product.slogan}.</h3></span>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductSpiel;