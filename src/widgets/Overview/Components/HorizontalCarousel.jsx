import React, {useState, useEffect} from 'react';

const HorizontalCarousel = function({photos, index}) {

  const [photo, setPhoto] = useState(photos[index]);

  useEffect( ()=> {
    setPhoto(photos[index])
  }, [photos, index])

  const imgStyle = {
    "height": "400px",
    "width": "400px",
    "objectFit": "contain",
    'position': 'absolute',
    'zIndex': '-1'
  }

  return (
    <React.Fragment>
      { photos ? <img src={photo.url} style={imgStyle} ></img> : <img></img> }
    </React.Fragment>
  )
}

export default HorizontalCarousel;
