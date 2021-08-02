import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import axios from 'axios';
import "regenerator-runtime/runtime.js"
const { url, API_TOKEN } = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;


const RelatedModal = (props) => {
  if (!props.showModal) {
    return null;
  }



  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header' style={{ padding: '10px' }}>
          <h4 className='modal-title' style={{ margin: '0' }}></h4>
        </div>
        <div className='modal-body-current' >
          <div className='modal-item-name'>{props.currentProduct.name}</div>
          {props.currentProduct.features.map((feature, index) =>
            <div key={index}> {feature.feature}, {feature.value}
            </div>
          )}
        </div>

        <div className='features'>
          Features
        </div>

        <div className='modal-body-related'>
          <div className='modal-item-name'>{props.chosenItem.name}</div>
          {props.chosenItem.features.map((feature, index) =>
            <div key={index} >{feature.feature}, {feature.value}</div>
          )}
        </div>
        <div className='modal-footer' style={{ padding: '10px' }}>
          {/* <button className='button' onClick={props.onClose}>Close</button> */}
        </div>
      </div>
    </div>
  )

}

export default RelatedModal