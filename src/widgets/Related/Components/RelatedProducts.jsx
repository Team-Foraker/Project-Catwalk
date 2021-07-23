import React, {useState, useEffect} from 'react'
import axios from 'axios'
const {url, API_TOKEN} = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);


  const getRelatedProducts = (arrayProductID) => {
    const promise = arrayProductID.map((id) => {
      return axios.get(url + `products/${id}`)
                  .then()
                  .catch();
    })
    return Promise.all(promise);
  }


  useEffect(() => {
    axios.get(url + 'products')
         .then((res) => {
           axios.get(url + `products/${res.data[0].id}/related`)
           .then((res) => {
             getRelatedProducts(res.data)
             .then((res) => {
               setRelatedProducts(res)
             })
           })
         })
  },[])

  console.log(relatedProducts)


  return (
    <div>
      Related Products Section
      <div>
      {relatedProducts.map((product) =>
      <div style={{border: '1px solid black', width: '20%', float: 'left', margin: '3px', height: '120px'}}>
      <p>{product.data.category}</p>
      <p>{product.data.name}</p>
      </div>
      )}
      </div>


    </div>
  )
}

export default RelatedProducts