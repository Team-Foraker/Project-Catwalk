import React, {useState, useEffect} from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import HorizontalCarousel from './HorizontalCarousel.jsx';
import ExpandedView from './ExpandedView.jsx';

const ImageGallery = function({style}) {

  const [index, setIndex] = useState(0);
  const [base, setBase] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const galleryStyle = {
    "height": "400px",
    "width": "400px",
    "borderStyle": "solid",
    "borderWidth": "thin",
    "position": "relative"
  }

  useEffect( () => {
    index === base + 7
    ? setBase(base + 1)
    : null;
    index < base
    ? setBase(base - 1)
    : null;
  }, [index])

  const updateIndex = function(event) {
    event.preventDefault();
    event.target.value !== undefined
    ? setIndex(index + JSON.parse(event.target.value))
    : setIndex(JSON.parse(event.target.attributes['1'].nodeValue));
  }

  return (
    <div style={galleryStyle} >
      <VerticalCarousel photos={style.photos} index={index} updateIndex={updateIndex} base={base} />
      {index !== 0
      ? <button value={-1} onClick={(e) => {updateIndex(e)}} style={ {"position": "absolute", "zIndex": '1'} } >Left</button>
      : <div></div>}
      { style ? <HorizontalCarousel photos={style.photos} index={index} setShowModal={setShowModal}/> : <HorizontalCarousel />  }
      {index !== style.photos.length -1
      ? <button value={1} onClick={(e) => {updateIndex(e)}} style={ {"float": "right", "position": "relative", "zIndex": '2'} }>Right</button>
      : <div></div>}

      <ExpandedView showModal={showModal} onClose={() => setShowModal(false)} photo={style.photos[index]} index={index} style={style} updateIndex={(e) => updateIndex(e)} />
    </div>
  )
}

export default ImageGallery;