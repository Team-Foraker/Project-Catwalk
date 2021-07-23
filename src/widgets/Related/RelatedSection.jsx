import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RelatedProducts from './Components/RelatedProducts.jsx'

const {url, API_TOKEN} = require('../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedSection = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url + 'products')
         .then((res) => {
           setProducts(res.data)
         })
         .catch((err) => {
           throw err;
         })
  }, [])


  return (
    <div>
      <RelatedProducts />

    </div>
  )

}


export default RelatedSection