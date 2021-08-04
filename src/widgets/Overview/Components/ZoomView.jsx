import React from 'react';

const ZoomView = function({photo, handleZoom}) {



  return (
    <div id="zoomed" style={ {'backgroundImage': `url(${photo.url})`} } onClick={() => handleZoom()} />
  )
}

export default ZoomView;