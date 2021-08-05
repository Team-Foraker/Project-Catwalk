import React, {useState, useEffect} from 'react';
import ZoomView from './ZoomView.jsx';

const HorizontalCarousel = function({photos, index, updateIndex, changeView, expanded}) {

  const [photo, setPhoto] = useState(photos[index]);
  const [zoom, setZoom] = useState(false);

  useEffect( ()=> {
    setPhoto(photos[index])
  }, [photos, index])

  const handleZoom = function() {
    setZoom(!zoom);
  }

  useEffect( () => {
    const zoomedImg = document.getElementById('zoomed');
    if (zoomedImg !== null) {
      zoomedImg.addEventListener('mousemove', (e) => {
        zoomedImg.style.setProperty('--x', -e.offsetX + 'px');
        zoomedImg.style.setProperty('--y', -e.offsetY + 'px');
      })
    }
  }, [zoom])

  return (
    <React.Fragment>
      {!expanded
      ? <div id="horizontal-carousel">
          {index !== 0
          ? <button className="left arrow" value={-1} onClick={(e) => {updateIndex(e)}} ></button>
          : <div className="left arrow invisible"></div>}
          { photos ? <img src={photo.url} id="main-image" className="default" onClick={() => changeView()}></img> : <img></img> }
          {index !== photos.length -1
          ? <button className="right arrow" value={1} onClick={(e) => {updateIndex(e)}} ></button>
          : <div className="right arrow invisible"></div>}
        </div>
      : <div id="horizontal-carousel" className="expanded">
          {index !== 0
          ? <button className="left arrow" value={-1} onClick={(e) => {updateIndex(e)}} ></button>
          : <div className="left arrow invisible"></div>}
          { photos ? <img src={photo.url} id="main-image" className="expanded" onClick={() => handleZoom()}></img> : <img></img> }
          <button id="close-button" onClick={() => changeView()}></button>
          {zoom ? <ZoomView photo={photo} handleZoom={handleZoom} /> : <React.Fragment />}
          {index !== photos.length -1
          ? <button className="right arrow" value={1} onClick={(e) => {updateIndex(e)}} ></button>
          : <div className="right arrow invisible"></div>}
        </div> }
    </React.Fragment>
  )
}

export default HorizontalCarousel;
