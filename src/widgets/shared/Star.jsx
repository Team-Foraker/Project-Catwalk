import React, { useState, useEffect } from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(solid, regular);

const Star = props => {
  return <div id="ratings-stars">
    &#9733;&#9733;&#9733;&#9733;&#9733;
  </div>
}

export default Star;