import React, {useState, useEffect} from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import HorizontalCarousel from './HorizontalCarousel.jsx';

const ImageGallery = function({styles, style}) {

  const [index, setIndex] = useState(0);
  const [base, setBase] = useState(0);
  const [expanded, setExpanded] = useState(false);


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

  const changeView = function() {
    setExpanded(!expanded);
  }

  return (
    <React.Fragment>
      {!expanded
      ?<div id="image-gallery">
        <VerticalCarousel photos={style.photos} index={index} updateIndex={updateIndex} base={base} />
        { style ? <HorizontalCarousel photos={style.photos} index={index} updateIndex={updateIndex} changeView={changeView} expanded={expanded} /> : <HorizontalCarousel />}
      </div>
      : <div id="image-gallery" className="expanded">
          <HorizontalCarousel photos={style.photos} index={index} updateIndex={updateIndex} changeView={changeView} expanded={expanded} />
        </div>}
    </React.Fragment>
  )
}

export default ImageGallery;