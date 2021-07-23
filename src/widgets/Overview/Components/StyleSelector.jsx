import React, {useState, useEffect} from 'react';
import axios from 'axios';

const {url, API_TOKEN} = require('../../../../config.js')

const StyleSelector = function({styles}) {

  return (
    <div>
      {styles.map( (style) => {
        return (
          <div key={style.style_id}>{style.name}</div>
        )
      })}
    </div>
  )
}

export default StyleSelector;