import React, {useState, useEffect} from 'react';

const HorizontalCarousel = function({photos, index, setShowModal, updateIndex}) {

  const [photo, setPhoto] = useState(photos[index]);

  useEffect( ()=> {
    setPhoto(photos[index])
  }, [photos, index])

  return (
    <div id="horizontal-carousel">
      {index !== 0
      ? <button className="left arrow" value={-1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div className="left arrow invisible"></div>}
      { photos ? <img src={photo.url} className="main-image" onClick={() => setShowModal(true)}></img> : <img></img> }
      {index !== photos.length -1
      ? <button className="right arrow" value={1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div className="right arrow invisible"></div>}
    </div>
  )
}

export default HorizontalCarousel;
