import React, {useState, useEffect} from 'react'
import axios from 'axios'
const {url, API_TOKEN} = require('../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedSection = (props) => {
  const [productsID, setProductsID] = useState([]);

  useEffect(() => {
    axios.get(url + 'products')
         .then((res) => {
           setProductsID(res.data)
         })
         .catch((err) => {
           throw err;
         })
  }, [])


  return (
    <div>
      Related Section will be here.
    </div>
  )

}


export default RelatedSection