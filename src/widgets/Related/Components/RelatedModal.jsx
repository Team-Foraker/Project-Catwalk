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

        <table className='table'>
          <tbody>

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
          <th className='mid'>Category</th>
          <th className='header'>{props.chosenItem.category}</th>
        </tr>

        <tr className='row'>
          <th className='header'>${props.currentProduct.default_price}</th>
          <th className='mid'>Price</th>
          <th className='header'>${props.chosenItem.default_price}</th>
        </tr>

        <tr className='row'>
          <th className='header'>{props.currentProduct.features[0].value}</th>
          <th className='mid'>Fabric</th>
          <th className='header'>{props.chosenItem.features[0].value}</th>
        </tr>

        <tr className='row'>
          <th className='header'>"{props.currentProduct.slogan}"</th>
          <th className='mid'>Slogan</th>
          <th className='header'>"{props.chosenItem.slogan}"</th>
        </tr>

        <tr className='row'>
          <th className='header'>{props.numOfStyles}</th>
          <th className='mid'>Styles</th>
          <th className='header'>{props.chosenItem.results.length}</th>
        </tr>

        </tbody>
        </table>



    </div>
    </div >
  )


}

export default RelatedModal