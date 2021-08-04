import React from 'react';
import Checkmark from './Checkmark.jsx';

const Style = function({style, currentStyle, setCurrent}) {

  return (
    <div className="style-holder" >
      { style.style_id === currentStyle.style_id
      ? <React.Fragment><img className="thumbnail" src={style.photos[0].thumbnail_url} onClick={() => {setCurrent(style)}} /><Checkmark /></React.Fragment>
      : <img className="thumbnail" src={style.photos[0].thumbnail_url} onClick={() => {setCurrent(style)}} />}
    </div>
  )
}

export default Style;