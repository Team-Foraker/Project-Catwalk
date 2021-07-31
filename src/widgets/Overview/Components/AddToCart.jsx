import React, {useState, useEffect} from 'react';
import SizeSelection from './SizeSelection.jsx';
import QuantitySelection from './QuantitySelection.jsx';
import CartButton from './CartButton.jsx';

const AddToCart = function({currentStyle}) {

  const [sizes, setSizes] = useState(Object.keys(currentStyle.skus))
  const [selection, setSelection] = useState("")
  const [selectedQuantity, setQuantity] = useState("-");

  useEffect( () => {
    setSizes(Object.keys(currentStyle.skus))
  }, [currentStyle]);

  useEffect( () => {
    setSelection("")
  }, [sizes]);

  // this still needs to be fixed
  // it changes the quantity to 1 when it doesn't always reflect it accurately
  useEffect( () => {
    selection !== ""
    ? setQuantity(1)
    : setQuantity("-")
  }, [selection])

  const selectSize = function(event) {
    setSelection(event.target.value)
  }

  const selectQuantity = function(event) {
    setQuantity(event.target.value)
  }

  return (
    <form>
      {sizes[0] !== "null"
      ? <SizeSelection sizes={sizes} currentStyle={currentStyle} selectSize={selectSize} />
      : <select disabled ><option>OUT OF STOCK</option></select>}
      {selection !== ""
      ? <QuantitySelection selection={selection} currentStyle={currentStyle} selectQuantity={selectQuantity} />
      : <select disabled><option>-</option></select>}
      {/* <select name="Quantity" onChange={ (e) => {selectQuantity(e)}}>
        {currentStyle.skus[selection]
        ? quantityFiller(selection).map( (quantity) => {
          return <option key={quantity} value={quantity}>{quantity}</option>
        })
        : <option></option>}
      </select> */}
      {sizes[0] !== "null"
      ? <CartButton sizes={sizes} selection={selection} selectedQuantity={selectedQuantity} currentStyle={currentStyle} />
      : <div></div>}
      <button>Star Symbol</button>
    </form>
  )
}

export default AddToCart;