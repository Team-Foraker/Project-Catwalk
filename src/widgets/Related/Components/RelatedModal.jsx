import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';

const RelatedModal = (props) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <div className='modal' style={{ display: 'flex', position: 'fixed', left: '0', top: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5', alignItems: 'center', justifyContent: 'center' }} onClick={props.onClose}>
      <div className='modal-content' style={{ width: '350px', height: '350px', backgroundColor: 'white' }} onClick={e => e.stopPropagation()}>
        <div className='modal-header' style={{ padding: '10px' }}>
          <h4 className='modal-title' style={{ margin: '0' }}></h4>
        </div>
        <div className='modal-body' style={{padding: '10px', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
          MODAL BODY
          <div style={{ fontWeight: 'bold' }}>{props.chosenItem.name}</div>
          {props.chosenItem.features.map((feature, index) =>
          <div>{feature.feature}, {feature.value}</div>
          )}


        </div>
        <div className='modal-footer' style={{ padding: '10px' }}>
          <button className='button' onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )

}

export default RelatedModal