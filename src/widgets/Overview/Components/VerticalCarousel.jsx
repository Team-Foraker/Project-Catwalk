import React, {useState, useEffect} from 'react';

const VerticalCarousel = function({photos, index, updateIndex, base}) {

  const thumbnailStyle = {
    'maxHeight': '50px',
    'maxWidth': '50px'
  }

  const verticalGrid = {
    'display': 'grid',
    'gridTemplateColumns': '50px',
    'gridTemplateRows': '15px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 15px',
    'gridGap': '15px',
    'position': 'absolute',
    'zIndex': '1'
  }

  const highlighted = {
    'height': '5px',
    'width': '45px',
    'backgroundColor': 'gray'
  }

  const invisible = {
    'opacity': '0'
  }

  const photoFiller = function(photos, index) {
    const photoArray = [];

    for (var i = base; i < base + 7 && i < photos.length; i++) {
      photoArray.push(photos[i]);
    }
    return photoArray;
  }

  const upArrow = {
    top: '50%',
    width: '0',
    height: '0',
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderRight: '15px solid red',
    transform: 'rotate(90deg)'
  }

  const downArrow = {
    top: '50%',
    width: '0',
    height: '0',
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderRight: '15px solid red',
    transform: 'rotate(270deg)'
  }

  return (
    <div style={verticalGrid}>
      {index !== 0
      ? <button style={upArrow} value={-1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div/>}
      {photoFiller(photos, index).map( (photo, i) => {
        return <button key={i} onClick={(e) => {updateIndex(e)}} ><img src={photo.thumbnail_url} style={thumbnailStyle} value={i + base}/>{index === i + base ? <div style={highlighted}></div> : <div style ={invisible}></div>}</button>
      })}
      {index !== photos.length -1
      ? <button style={downArrow} value={1} onClick={(e) => {updateIndex(e)}} ></button>
      : <div/>}
    </div>
  )
}

export default VerticalCarousel;