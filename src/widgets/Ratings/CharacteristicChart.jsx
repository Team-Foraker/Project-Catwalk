import React from 'react';

const CharacteristicChart = (props) => {

  return (
    <div>
      <div>{props.catName}</div>
      <div className="pointer">&#9660;</div>
      <div className="segment-container">
        <div className="segment"></div>
        <div className="segment"></div>
        <div className="segment"></div>
      </div>
      <div className="segment-container">
        <small>{props.labels['L']}</small>
        <small>{props.labels['M']}</small>
        <small>{props.labels['R']}</small>
      </div>
    </div>
  )
}

export default CharacteristicChart;