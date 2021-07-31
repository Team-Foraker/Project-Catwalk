import React from 'react';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../../config.js')
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const CartButton = function({sizes, selection, selectedQuantity, currentStyle}) {

  const postToCart = function(event, currentStyle, sizes, selection, selectedQuantity) {
    event.preventDefault();
    if (selection === "") {
      // this should open up the size selector menu
      // and also alert the user that they need to select a size
    } else if (selectedQuantity > 0) {
      axios.post(url + 'cart', {sku_id: selection, count: selectedQuantity})
        .then((results) => {
          alert(`Added items to cart`)
        })
        .catch((error) => {
          throw new Error(error)
        })
    }
  }

  return (
    <button onClick={ (e) => {postToCart(e, currentStyle, sizes, selection, selectedQuantity)}}>Add to Cart</button>
  )
}

export default CartButton;