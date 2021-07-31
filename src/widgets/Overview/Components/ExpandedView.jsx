import React from 'react';

const ExpandedView = ({showModal, onClose, photo}) => {
  if (!showModal) {
    console.log(photo)
    return null;
  }

  return (
    <div className='modal' style={{ display: 'flex', position: 'fixed', left: '0', top: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5', alignItems: 'center', justifyContent: 'center', zIndex: '3' }} onClick={onClose}>
      <div className='modal-content' style={{ width: '75vw', height: '75vh', backgroundColor: 'white' }} onClick={e => e.stopPropagation()}>
        <div className='modal-header' style={{ padding: '10px' }}>
          <h4 className='modal-title' style={{ margin: '0' }}></h4>
        </div>
        <div className='modal-body' style={{padding: '10px', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          <img src={photo.url} style={ {width: '70vw', height: '70vh', objectFit: 'contain'} }></img>
        </div>
        <div className='modal-footer' style={{ padding: '10px' }}>
          <button className='button' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )

}

export default ExpandedView