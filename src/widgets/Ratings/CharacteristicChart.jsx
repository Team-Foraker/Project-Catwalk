import React from 'react';

const CharacteristicChart = (props) => {
  return (
    <div>
      <div>{props.catName}</div>
      <div className="pointer" style={{marginLeft: `${(parseInt(props.catObj.value) - 1) * 25}%`}}>&#9660;</div>
      <div className="segment-container-top">
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