import React, {useState, useEffect} from 'react';
import ProductInfo from './Components/ProductInfo.jsx';
import StyleSelector from './Components/StyleSelector.jsx';
import AddToCart from './Components/AddToCart.jsx';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../config.js')

const Overview = function(props) {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(url + 'products')
      .then( (products) => {
        setProduct(products.data[0])
        axios.get(`${url}products/${products.data[0].id}/styles`)
          .then( (styles) => {
            setStyles(styles.data.results);
          })
          .catch( (error) => {
            throw new Error(error);
          })
      })
      .catch( (error) => {
        throw new Error(error);
      })
  }, []);

  return (
    <div>
      Overview
      {/* Image Gallery */}
      <ProductInfo product={product}/>
      <StyleSelector styles={styles}/>
      <AddToCart style={styles[0]}/>
    </div>
  )
}

export default Overview;