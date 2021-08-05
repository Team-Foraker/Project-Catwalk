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


  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    let product = props.currentProduct.features.map((feature, index) => {
      let combinedFeatures = [];
      combinedFeatures += feature.feature + ', ' + feature.value;
      return combinedFeatures;
    })
    let product2 = props.chosenItem.features.map((feature, index) => {
      let combinedFeatures = [];
      combinedFeatures += feature.feature + ', ' + feature.value;
      return combinedFeatures;
    })
    setCombinedData(combinedData.push(product.concat(product2)))


  }, [])




  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>

        {/* <div className='modal-body-current' >
          <div className='modal-item-name'>{props.currentProduct.name}</div>
          {props.currentProduct.features.map((feature, index) =>
            <div key={index}> {feature.feature}, {feature.value}
            </div>
          )}
        </div> */}

        <table className='table'>

          <tr className='top-row'>
            <th className='top-header'>{props.currentProduct.name}</th>
            <th className='hidden-header'></th>
            <th className='top-header'>{props.chosenItem.name}</th>
          </tr>
        <tr className='hidden-row'>
          <th className='hidden-header'></th>
          <th className='hidden-header'></th>
          <th className='hidden-header'></th>
        </tr>

        <tr className='row'>
          <th className='header'>{props.currentProduct.category}</th>
          <th className='header'>Category</th>
          <th className='header'>{props.chosenItem.category}</th>

        </tr>
        <tr className='row'>
          <th className='header'>${props.currentProduct.default_price}</th>
          <th className='header'>Price</th>
          <th className='header'>${props.chosenItem.default_price}</th>

        </tr>
        <tr className='row'>
          <th className='header'>{props.currentProduct.features[0].value}</th>
          <th className='header'>Fabric</th>
          <th className='header'>{props.chosenItem.features[0].value}</th>

        </tr>
        <tr className='row'>
          <th className='header'>currentProduct</th>
          <th className='header'>Stitching</th>
          <th className='header'>chosenItem</th>


        </tr>

        <tr className='row'>
          <th className='header'>currentProduct</th>
          <th className='header'>Stitching</th>
          <th className='header'>chosenItem</th>

        </tr>

        <tr className='row'>
          <th className='header'>currentProduct</th>
          <th className='header'>Stitching</th>
          <th className='header'>chosenItem</th>

        </tr>
        </table>



      {/* <div className='modal-body-related'>
          <div className='modal-item-name'>{props.chosenItem.name}</div>
          {props.chosenItem.features.map((feature, index) =>
            <div key={index} >{feature.feature}, {feature.value}</div>
          )}
        </div>
        <div className='modal-footer' style={{ padding: '10px' }}>

        </div> */}
    </div>
    </div >
  )


}

export default RelatedModal