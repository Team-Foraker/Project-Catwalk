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
        console.log(`fetched data:`);
        console.log(products.data[0])
        setProduct(products.data[0])
        axios.get(`${url}products/${products.data[0].id}/styles`)
          .then( (styles) => {
            console.log(styles.data.results);
            setStyles(styles.data.results);
          })
          .catch( (error) => {
            console.log(error)
          })
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
      <StyleSelector styles={styles}/>
      <AddToCart style={styles[0]}/>
    </div>
  )
}

export default Overview;