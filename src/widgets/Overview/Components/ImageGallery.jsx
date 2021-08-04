import React, {useState, useEffect} from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import HorizontalCarousel from './HorizontalCarousel.jsx';
import ExpandedView from './ExpandedView.jsx';

const ImageGallery = function({styles, style}) {

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
    : setIndex(JSON.parse(event.target.attributes['2'].nodeValue));
  }

  return (
    <div id="image-gallery" >
      <VerticalCarousel photos={style.photos} index={index} updateIndex={updateIndex} base={base} />
      { style ? <HorizontalCarousel photos={style.photos} index={index} setShowModal={setShowModal} updateIndex={updateIndex} /> : <HorizontalCarousel />}
      <ExpandedView showModal={showModal} onClose={() => setShowModal(false)} photo={style.photos[index]} index={index} style={style} updateIndex={(e) => updateIndex(e)} />
    </div>
  )
}

export default ImageGallery;