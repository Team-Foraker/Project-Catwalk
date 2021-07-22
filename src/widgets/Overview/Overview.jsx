import React, {useState, useEffect} from 'react';
import ProductInfo from './Components/ProductInfo.jsx'
import axios from 'axios';
const {url, API_TOKEN} = require('../../../config.js')

var Overview = function(props) {

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(url + 'products')
      .then( (products) => {
        console.log(`fetched data:`);
        console.log(products.data[0])
        setProduct(products.data[0])
      })
      .catch( (error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      Overview
      {/* Image Gallery */}
      <ProductInfo product={product}/>
      {/* Style Selector */}
      {/* Add to Cart */}
    </div>
  )
}

export default Overview;