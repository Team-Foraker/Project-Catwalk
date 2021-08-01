import React, {useState, useEffect} from 'react';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../../config.js')
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const CartButton = function({sizes, selection, selectedQuantity, currentStyle, setEmpty}) {

  const [sizeDropDown, setSizeDropDown] = useState(null);

  const postToCart = function(event, currentStyle, sizes, selection, selectedQuantity) {
    event.preventDefault();
    if (selection.length === 0) {
      setEmpty(true)
      console.log(document.getElementById('sizeSelector'))
      let e = new KeyboardEvent('keydown', {'keyCode':32, 'which':32});
      let sizeSelector = document.getElementById('sizeSelector');
      sizeSelector.focus();
      sizeSelector.dispatchEvent(e);
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