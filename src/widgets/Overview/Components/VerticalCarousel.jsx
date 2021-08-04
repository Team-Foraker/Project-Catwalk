import React, {useState, useEffect} from 'react';

const VerticalCarousel = function({photos, index, updateIndex, base}) {

  const photoFiller = function(photos, index) {
    const photoArray = [];

    for (var i = base; i < base + 7 && i < photos.length; i++) {
      photoArray.push(photos[i]);
    }
    return photoArray;
  }

  return (
    <div id="vertical-carousel">
      {index !== 0
      ? <button className="up arrow" value={-1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div className="up arrow invisible"/>}
      {photoFiller(photos, index).map( (photo, i) => {
        return <div key={i} className="item" onClick={(e) => {updateIndex(e)}} ><img src={photo.thumbnail_url} className="thumbnail" value={i + base}/>{index === i + base ? <div className="highlighted" ></div> : <div className="invisible" ></div>}</div>
      })}
      {index !== photos.length -1
      ? <button className="down arrow" value={1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div/>}
    </div>
  )
}

export default VerticalCarousel;