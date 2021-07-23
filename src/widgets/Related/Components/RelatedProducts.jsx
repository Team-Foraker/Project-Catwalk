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



  // useEffect(() => {
  //   axios.get(url + 'products')
  //        .then((res) => {
  //          axios.get(url + `products/${res.data[0].id}/related`)
  //          .then((res) => {
  //            console.log(res)
  //            const list = res.data
  //            for (let i = 0; i < list.length; i++) {
  //             axios.get(url + `products/${list[i]}`)
  //             .then((res) => {
  //               setRelatedProducts(relatedProducts.push(res.data))
  //             })
  //            }
  //          })
  //        })
  // },[])

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
      <div>{product.data.name}</div>)}
      </div>




    </div>
  )
}

export default RelatedProducts