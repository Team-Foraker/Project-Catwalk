import React, {useState, useEffect} from 'react';
import SizeSelection from './SizeSelection.jsx';
import QuantitySelection from './QuantitySelection.jsx';
import CartButton from './CartButton.jsx';

const AddToCart = function({currentStyle, isEmpty, setEmpty}) {

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
    ? setQuantity("1")
    : setQuantity("-")
  }, [selection])

  const selectSize = function(event) {
    setSelection(event.target.value)
  }

  const selectQuantity = function(event) {
    setQuantity(event.target.value)
  }

  return (
    <form id="cart">
      {!isEmpty
      ? <div/>
      : <span className="error">Please select size</span>}
      <div className="flex-container">
      {sizes[0] !== "null"
      ? <SizeSelection sizes={sizes} currentStyle={currentStyle} selectSize={selectSize} />
      : <select disabled id="sizeSelector"><option>OUT OF STOCK</option></select>}
      {selection !== ""
      ? <QuantitySelection selection={selection} currentStyle={currentStyle} selectQuantity={selectQuantity} />
      : <select disabled id="quantity"><option>—</option></select>}
      </div>
      <div className="flex-container">
      {sizes[0] !== "null"
      ? <CartButton sizes={sizes} selection={selection} selectedQuantity={selectedQuantity} currentStyle={currentStyle} setEmpty={setEmpty} />
      : <div></div>}
      {/* <button>Star Symbol</button> */}
      </div>
    </form>
  )
}

export default AddToCart;