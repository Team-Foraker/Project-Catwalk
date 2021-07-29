import React from 'react';
import HorizontalCarousel from './HorizontalCarousel.jsx';

const ImageGallery = function({style}) {

  return (
    <div>
      {/* Vertical Carousel */}
      { style ? <HorizontalCarousel photos={style.photos}/> : <HorizontalCarousel />  }
    </div>
  )
}

export default ImageGallery;