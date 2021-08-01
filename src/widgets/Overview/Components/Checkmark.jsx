import React from 'react';

const Checkmark = function(props) {

  const checkmarkHolder = {
    'height': '15px',
    'width': '15px',
    'borderRadius': '50%',
    'borderStyle': 'solid',
    'borderWidth': 'thin'
  }

  const leftMark = {
    'height': '2px',
    'width': '5px',
    'backgroundColor': 'black',
    'transform': 'rotate(45deg)'
  }

  const rightMark = {
    'height': '11px',
    'width': '2px',
    'backgroundColor': 'black',
    'transform': 'rotate(225deg)'
  }

  return (
    <div style={checkmarkHolder}><div style={leftMark}></div><div style={rightMark}></div></div>
  )
}

export default Checkmark