import React, {useState, useEffect} from 'react';
import ImageGallery from './Components/ImageGallery.jsx';
import ProductInfo from './Components/ProductInfo.jsx';
import StyleSelector from './Components/StyleSelector.jsx';
import AddToCart from './Components/AddToCart.jsx';
import axios from 'axios';
const {url, API_TOKEN} = require('../../../config.js')
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const {products, productStyles} = require('./DefaultData/placeholderData.js');

const Overview = function(props) {

  const [product, setProduct] = useState(products[0]);
  const [styles, setStyles] = useState(productStyles);

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
      <ImageGallery style={styles[0]}/>
      <ProductInfo product={product} style={styles[0]}/>
      <StyleSelector styles={styles}/>
      <AddToCart style={styles[0]}/>
    </div>
  )
}

export default Overview;