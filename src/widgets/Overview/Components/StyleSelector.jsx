import React, {useState, useEffect} from 'react';
import Style from './Style.jsx';

const StyleSelector = function({styles, currentStyle, setCurrent}) {

  return (
    <div>
      <h4><b>Style ></b> {currentStyle.name}</ h4>
      {styles.map( (style) => {
        return (
          <Style key={style.style_id} style={style} setCurrent={setCurrent} />
        )
      })}
    </div>
  )
}

export default StyleSelector;