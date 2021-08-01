import React from 'react';

const SizeBreakdown = props => {
  var characteristics = props.characteristics;

  return (
    <div className="breakdown-flex-container">
      <div className="breakdown-segment"></div>
      <div className="breakdown-segment"></div>
      <div className="breakdown-segment"></div>
    </div>
  )
}

export default SizeBreakdown;