import React, {useState, useEffect} from 'react'
import axios from 'axios'
import App from '../../App.jsx'
import RelatedProducts from './Components/RelatedProducts.jsx'
import RelatedOutfits from './Components/RelatedOutfit.jsx'

const {url, API_TOKEN} = require('../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedSection = (props) => {

  return (
    <div>
      <RelatedProducts getProducts={props.getProducts}/>
      <RelatedOutfits getProducts={props.getProducts}/>

    </div>
  )

}


export default RelatedSection