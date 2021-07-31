import React, {useState, useEffect} from 'react';

const ExpandedView = ({showModal, onClose, photo, index, style, updateIndex}) => {
  if (!showModal) {
    return null;
  }

  const [zoom, setZoom] = useState(false);

  const zoomHandler = function() {
    setZoom(!zoom);
  }

  useEffect( (e) => {
    const zoomedImg = document.getElementById('zoomed')
    if (zoomedImg !== null) {
      zoomedImg.addEventListener('mousemove', (e) => {
        zoomedImg.style.setProperty('--x', -e.offsetX + 'px');
        zoomedImg.style.setProperty('--y', -e.offsetY + 'px');
      })
    } else {
    }
  }, [zoom])


  return (
    <div className='modal' style={{ display: 'flex', position: 'fixed', left: '0', top: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5', alignItems: 'center', justifyContent: 'center', zIndex: '3' }} onClick={onClose}>
      <div className='modal-content' style={{ width: '75vw', height: '75vh', backgroundColor: 'white' }} onClick={e => e.stopPropagation()}>
        <div className='modal-header' style={{ padding: '10px' }}>
          <h4 className='modal-title' style={{ margin: '0' }}></h4>
        </div>
        <div className='modal-body' style={{padding: '10px', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          {index !== 0 && !zoom
          ? <button value={-1} onClick={(e) => {updateIndex(e)}} style={ {"position": "absolute", "zIndex": '1'} } >Left</button>
          : <div></div>}
          {(!zoom)
          ? <img src={photo.url} style={ {width: '70vw', height: '70vh', objectFit: 'contain', cursor: "url(https://img.icons8.com/material-outlined/24/000000/plus--v1.png), zoom-in"} } onClick={() => zoomHandler()}></img>
          : <div id="zoomed"  style={ {width: '70vw', height: '70vh', cursor: "url(https://img.icons8.com/ios-glyphs/30/000000/minus.png), zoom-out", '--x': '0px', '--y': '0px', backgroundImage: `url(${photo.url})`, backgroundPosition: 'var(--x) var(--y)', backgroundSize: '150%', backgroundRepeat: 'no-repeat'} } onClick={()=> zoomHandler()}></div>}
          {index !== style.photos.length -1 && !zoom
          ? <button value={1} onClick={(e) => {updateIndex(e)}} style={ {"float": "right", "position": "relative", "zIndex": '2'} }>Right</button>
          : <div></div>}
        </div>
        <div className='modal-footer' style={{ padding: '10px' }}>
          <button className='button' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )

}

export default ExpandedView