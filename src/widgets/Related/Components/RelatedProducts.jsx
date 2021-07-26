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

  const getRelatedStyles = (arrayProducts) => {
    const promiseStyles = arrayProducts.map((id) => {
      return axios.get(url + `products/${id}/styles`)
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
               let arrayRP = res.map((rp) => {
                 return rp.data;
               });
               return arrayRP;
             })
             .then((arrayRP) => {
               let productID = arrayRP.map((rp) => {
                 return rp.id;
               });
               getRelatedStyles(productID)
               .then((styleData) => {
                 let arrayStyle = styleData.map((rp, index) => {
                   let temp = Object.assign({}, rp.data, arrayRP[index]);
                   return temp;
                 });
                 return arrayStyle;
               })
               .then((res) => {
                 setRelatedProducts(res);
               })
             })
           })
         })
  },[])



  return (
    <div>
      <h3>Related Products Section</h3>
      <div>
        {relatedProducts.map((item, index) =>
        <div key={index} style={{border: '1px solid black', width: '20%', float: 'left', margin: '3px', height: '250px'}}>

        <img style={{height: '60%', width: '100%'}} src={item.results[0].photos[0].thumbnail_url}/>
        <div>{item.category}</div>
        <div style={{fontWeight: 'bold'}}>{item.name}</div>
        <div>{item.default_price}</div>
        <div>StarRating</div>

        </div>
        )}


      </div>


    </div>
  )
}

export default RelatedProducts