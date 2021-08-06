import React from 'react';

const ZoomView = function({photo, handleZoom, handleMissingPhoto}) {



  return (
    <div id="zoomed" style={ {'backgroundImage': `url(${handleMissingPhoto})`} } onClick={() => handleZoom()} />
  )
}

export default ZoomView;