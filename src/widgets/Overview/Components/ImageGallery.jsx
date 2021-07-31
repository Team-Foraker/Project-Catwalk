import React, {useState, useEffect} from 'react';
import HorizontalCarousel from './HorizontalCarousel.jsx';

const ImageGallery = function({style}) {

  const [index, setIndex] = useState(0);

  const galleryStyle = {
    "height": "400px",
    "width": "400px",
    "borderStyle": "solid",
    "borderWidth": "thin"
  }

  const updateIndex = function(event) {
    event.preventDefault();
    setIndex(index + JSON.parse(event.target.value))
  }

  return (
    <div style={galleryStyle} >
      {/* Vertical Carousel */}
      {index !== 0
      ? <button value={-1} onClick={(e) => {updateIndex(e)}} >Left</button>
      : <div></div>}
      { style ? <HorizontalCarousel photos={style.photos} index={index} /> : <HorizontalCarousel />  }
      {index !== style.photos.length -1
      ? <button value={1} onClick={(e) => {updateIndex(e)}} style={ {"float": "right" }}>Right</button>
      : <div></div>}
    </div>
  )
}

export default ImageGallery;