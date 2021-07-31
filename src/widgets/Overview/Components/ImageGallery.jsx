import React, {useState, useEffect} from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import HorizontalCarousel from './HorizontalCarousel.jsx';

const ImageGallery = function({style}) {

  const [index, setIndex] = useState(0);

  const galleryStyle = {
    "height": "400px",
    "width": "400px",
    "borderStyle": "solid",
    "borderWidth": "thin"
  }

  const verticalGrid = {
    'display': 'grid',
    'gridTemplateRows': '50px 50px 50px 50px 50px 50px 50px',
    'gridGap': '15px'
  }

  const updateIndex = function(event) {
    event.preventDefault();
    event.target.value !== undefined
    ? setIndex(index + JSON.parse(event.target.value))
    : setIndex(JSON.parse(event.target.attributes['1'].nodeValue));
  }

  return (
    <div style={galleryStyle} >
      <VerticalCarousel photos={style.photos} index={index} style={verticalGrid} updateIndex={updateIndex} />
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