import React, {useEffect} from 'react';

const QuantitySelection = function({selection, currentStyle, selectQuantity}) {

  const quantityFiller = function(selection) {
    let quantityArray = [];
    for (var i = 1; i <= currentStyle.skus[selection].quantity && i <= 15; i++) {
      quantityArray.push(i);
    }
    return quantityArray;
  }

  return(
    <select name="Quantity" onChange={ (e) => {selectQuantity(e)}}>
      {currentStyle.skus[selection]
      ? quantityFiller(selection).map( (quantity) => {
        return <option key={quantity} value={quantity}>{quantity}</option>
      })
      : <option></option>}
  </select>
  )
}

export default QuantitySelection;