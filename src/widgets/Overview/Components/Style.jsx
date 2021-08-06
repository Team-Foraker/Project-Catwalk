import React from 'react';
import Checkmark from './Checkmark.jsx';

const Style = function({style, currentStyle, setCurrent}) {

  const handleMissingThumbnail = style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'https://josselyn.org/wp-content/themes/qube/assets/images/no-image/No-Image-Found-400x264.png'

  return (
    <div className="style-holder" >
      { style.style_id === currentStyle.style_id
      ? <React.Fragment><img className="thumbnail" src={handleMissingThumbnail} onClick={() => {setCurrent(style)}} /><Checkmark /></React.Fragment>
      : <img className="thumbnail" src={handleMissingThumbnail} onClick={() => {setCurrent(style)}} />}
    </div>
  )
}

export default Style;