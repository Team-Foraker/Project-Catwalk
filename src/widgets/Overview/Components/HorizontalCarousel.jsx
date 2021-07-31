import React, {useState, useEffect} from 'react';

const HorizontalCarousel = function({photos, index, setShowModal}) {

  const [photo, setPhoto] = useState(photos[index]);

  useEffect( ()=> {
    setPhoto(photos[index])
  }, [photos, index])

  const imgStyle = {
    "height": "400px",
    "width": "400px",
    "objectFit": "contain",
    'position': 'absolute',
    'cursor': 'zoom-in'
  }

  return (
    <React.Fragment>
      { photos ? <img src={photo.url} style={imgStyle} onClick={() => setShowModal(true)}></img> : <img></img> }
    </React.Fragment>
  )
}

export default HorizontalCarousel;
