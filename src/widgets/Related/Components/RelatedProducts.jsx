import React, {useState, useEffect} from 'react'
import axios from 'axios'
const {url, API_TOKEN} = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);


  const getRelatedProducts = (arrayProductID) => {
    const promise = arrayProductID.map((id) => {
      return axios.get(url + `products/${id}`)
                  .then()
                  .catch();
    })
    return Promise.all(promise);
  }

  const getRelatedStyles = (arrayProducts) => {
    const promiseStyles = arrayProducts.map((product) => {
      return axios.get(url + `products/${product.data.id}/styles`)
                  .then()
                  .catch();
    })
    return Promise.all(promiseStyles);
  }


  useEffect(() => {
    axios.get(url + 'products')
         .then((res) => {
           axios.get(url + `products/${res.data[0].id}/related`)
           .then((res) => {
             //res.data = [12030, 230124, 412033, 23013]
             getRelatedProducts(res.data)
             .then((res) => {
               setRelatedProducts(res)
               getRelatedStyles(res)
               .then((res) => {
                 setRelatedStyles(res)
               })
             })
           })
         })
  },[])

console.log('products', relatedProducts)
// id
// product name, category
console.log('styles', relatedStyles)
// id
// price, picture


  return (
    <div>
      <h3>Related Products Section</h3>
      <div>
      {relatedProducts.map((product, index) =>
      <div key={index} style={{border: '1px solid black', width: '20%', float: 'left', margin: '3px', height: '120px'}}>
      <div key='image'>image</div>
      <div key='category'>{product.data.category}</div>
      <div key='name'>{product.data.name}</div>
      <div key='price'>price</div>

      </div>
      )}
      </div>


    </div>
  )
}

export default RelatedProducts