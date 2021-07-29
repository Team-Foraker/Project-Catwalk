import React, {useState, useEffect} from 'react';

const AddToCart = function({currentStyle}) {

  const [sizes, setSizes] = useState(Object.keys(currentStyle.skus))
  const [selection, setSelection] = useState(sizes[0])
  const [selectedQuality, setQuantity] = useState("1");

  useEffect( () => {
    setSizes(Object.keys(currentStyle.skus))
  }, [currentStyle]);

  useEffect( () => {
    setSelection(sizes[0])
  }, [sizes])



  const quantityFiller = function(selection) {
    let quantityArray = [];
    for (var i = 1; i <= currentStyle.skus[selection].quantity; i++) {
      quantityArray.push(i);
    }
    return quantityArray;
  }

  const selectSize = function(event) {
    setSelection(event.target.value)
  }

  const selectQuantity = function(event) {
    setQuantity(event.target.value)
  }

  return (
    <form>
      <select name="Select Size" onChange={ (e) => {selectSize(e)}}>
        {currentStyle.skus[sizes[0]]
        ? sizes.map( (id) => {
          return <option key={id} value={id}>{currentStyle.skus[id].size}</option>
        })
        : <option></option>}
        {/* <option value="default">Select Size</option>
        <option value="XS">XS</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option> */}
      </select>
      <select name="Quantity" onChange={ (e) => {selectQuantity(e)}}>
        {currentStyle.skus[selection]
        ? quantityFiller(selection).map( (quantity) => {
          return <option key={quantity} value={quantity}>{quantity}</option>
        })
        : <option></option>}
        {/* <option>1</option> */}
      </select>
      <button>Add to Bag +</button>
      <button>Star Symbol</button>
    </form>
  )
}

export default AddToCart;