import React, {useState, useEffect} from 'react';

const VerticalCarousel = function({photos, index, updateIndex}) {

  const thumbnailStyle = {
    'maxHeight': '50px',
    'maxWidth': '50px'
  }

  return (
    <div>
      {photos.map( (photo, i) => {
        return <button key={i} onClick={(e) => {updateIndex(e)}} ><img src={photo.thumbnail_url} style={thumbnailStyle} value={i}/></button>
      })}
    </div>
  )
}

export default VerticalCarousel;