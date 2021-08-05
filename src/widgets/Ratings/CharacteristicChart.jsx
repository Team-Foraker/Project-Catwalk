import React from 'react';

const CharacteristicChart = (props) => {
  return (
    <div>
      <div>{props.catName}</div>
      <div className="pointer" style={{ marginLeft: `${(parseInt(props.catObj.value) - 1) * 25}%` }}>&#9660;</div>
      <div className="segment-container-top">
        <div className="segment-vert-container-left">
          <div className="segment"></div>
          <small>{props.labels['L']}</small>
        </div>
        <div className="segment-vert-container-center">
          <div className="segment"></div>
          <div>
          <small>{props.labels['M']}</small>

          </div>
        </div>
        <div className="segment-vert-container-right">
          <div className="segment"></div>

          <small>{props.labels['R']}</small>
        </div>
      </div>
      <div className="segment-container">
      </div>
    </div>
  )
}

export default CharacteristicChart;