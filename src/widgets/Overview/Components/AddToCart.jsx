import React from 'react';

const AddToCart = function({style}) {

  return (
    <form>
      <select name="Select Size">
        <option value="default">Select Size</option>
        <option value="XS">XS</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <select name="Quantity">
        <option>1</option>
      </select>
      <button>Add to Bag +</button>
      <button>Star Symbol</button>
    </form>
  )
}

export default AddToCart;