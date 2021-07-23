import React, {useState, useEffect} from 'react';
import Style from './Style.jsx';

const StyleSelector = function({styles}) {

  // will need a click handler, that hooks back to overview to disperse new selected style state down to other components
  // will also need to handle AJAX requests for the selected style's info from the Database

  return (
    <div>
      <span>Style > Selected Style</span>
      {styles.map( (style) => {
        return (
          <Style key={style.style_id} style={style}/>
        )
      })}
    </div>
  )
}

export default StyleSelector;