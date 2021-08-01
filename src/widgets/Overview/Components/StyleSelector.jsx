import React, {useState, useEffect} from 'react';
import Style from './Style.jsx';

const StyleSelector = function({styles, currentStyle, setCurrent}) {

  const selectorStyle = {
    'gridRowStart': '2'
  }

  const gridStyle = {
    'display': 'grid',
    'gridTemplateColumns': '65px 65px 65px 65px',
    'gridGap': '15px'
  }

  return (
    <div style={selectorStyle}>
      <h4><b>Style ></b> {currentStyle.name}</ h4>
      <div style={gridStyle}>
      {styles.map( (style) => {
        return (
          <Style key={style.style_id} style={style} setCurrent={setCurrent} currentStyle={currentStyle} />
        )
      })}
      </div>
    </div>
  )
}

export default StyleSelector;