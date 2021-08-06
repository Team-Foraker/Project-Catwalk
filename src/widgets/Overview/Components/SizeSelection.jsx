import React from 'react';

const SizeSelection = function({sizes, currentStyle, selectSize}) {

  return (
  <select name="Select Size" onChange={ (e) => {selectSize(e)}} id="sizeSelector">
    <option value="">Select Size</option>
    {currentStyle.skus[sizes[0]]
    ? sizes.map( (id) => {
      return <option key={id} value={id}>{currentStyle.skus[id].size}</option>
    })
    : <option></option>}
</select>
  )
}

export default SizeSelection;