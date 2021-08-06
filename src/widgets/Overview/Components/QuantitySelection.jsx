import React, {useEffect} from 'react';

const QuantitySelection = function({selection, currentStyle, selectQuantity}) {

  useEffect( () => {
    let quantitySelector = document.getElementById('quantity');
    quantitySelector.selectedIndex = 0;
  }, [selection])

  const quantityFiller = function(selection) {
    let quantityArray = [];
    for (var i = 1; i <= currentStyle.skus[selection].quantity && i <= 15; i++) {
      quantityArray.push(i);
    }
    return quantityArray;
  }

  return(
    <select id="quantity" name="Quantity" onChange={ (e) => {selectQuantity(e)}} defaultValue={1}>
      {currentStyle.skus[selection]
      ? quantityFiller(selection).map( (quantity) => {
        if (quantity === 1) {
          return <option key={quantity} value={quantity}>{quantity}</option>
        } else {
          return <option key={quantity} value={quantity}>{quantity}</option>
        }
      })
      : <option></option>}
  </select>
  )
}

export default QuantitySelection;