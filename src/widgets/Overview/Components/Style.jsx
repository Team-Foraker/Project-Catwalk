import React from 'react';

const Style = function({style, setCurrent}) {

  const imgStyle = {
    'height': '50px',
    'width': '50px',
    'borderRadius': '50%'
  }

  return (
    <img style={imgStyle} className='styleThumbnail' src={style.photos[0].thumbnail_url} onClick={() => {setCurrent(style)}} />
  )
}

export default Style;