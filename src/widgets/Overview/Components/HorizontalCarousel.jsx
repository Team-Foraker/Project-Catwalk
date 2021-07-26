import React, {useState, useEffect} from 'react';

const HorizontalCarousel = function({photos}) {

  const [photo, setPhoto] = useState(photos[0]);

  const imgStyle = {
    'maxHeight': '250px',
    'maxWidth': 'auto'
  }

  return (
    <React.Fragment>
      <div>Left</div>
      { photos ? <img src={photo.url} style={imgStyle}></img> : <img></img> }
      <div>Right</div>
    </React.Fragment>
  )
}

export default HorizontalCarousel;
