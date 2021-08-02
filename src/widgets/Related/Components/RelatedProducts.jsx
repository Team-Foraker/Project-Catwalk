import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedModal from './RelatedModal.jsx'
const { url, API_TOKEN } = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(relatedProducts.length);
  const [showModal, setShowModal] = useState(false);
  const [compareItems, setCompareItems] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);





  // leftCount
  const increment = () => {
    setLeftCount((leftCount) => leftCount + 1)
  }

  // rightCount
  const decrement = () => {
    setLeftCount((leftCount) => {
      if (leftCount !== 0) {
        return leftCount - 1;
      } else {
        return 0;
      }
    })
  }


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
    if (props.getProducts.id) {
        axios.get(url+ `products/${props.getProducts.id}`)
             .then((res) => {
               setCurrentProduct(res.data)
             })
        axios.get(url + `products/${props.getProducts.id}/related`)
          .then((res) => {
            //res.data = [12030, 230124, 412033, 23013]
            getRelatedProducts(res.data)
              .then((res) => {
                // res === array of related products

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
                    setRightCount(arrayRP.length);
                  })
              })
          })
        }
  }, [props.getProducts])

  return (
    <div>
      <h3>Related Products Section</h3>
      <div className='related-cards'>
        {leftCount !== 0 ? (
          <i className='left-arrow' onClick={() => {
            decrement();
          }}>
          </i>
        ) : (null)}

        {relatedProducts.slice(leftCount, rightCount).map((item, index) =>
          <div key={index} className='related-products'>
            <button onClick={() => {
            setShowModal(true);
            setCompareItems(item);}}>Modal Button</button>
            <img className='related-image' src={item.results[0].photos[0].thumbnail_url} />
            <div className='related-category'>{item.category}</div>
            <div className='related-name'>{item.name}</div>
            {item.sale_price ? (
            <div>
              <s className='related-price' style={{color: 'red'}}>${item.default_price}</s>
              <div className='related-price'>${item.sale_price}</div>
            </div>
            ) : (<div className='related-price'>${item.default_price}</div>)}
            <div className='related-star'>StarRating</div>
          </div>
        )}

        {leftCount !== rightCount - 1 ? (
          <i className='right-arrow' onClick={() => {
            increment();
          }}>
          </i>
        ) : (null)}

        <RelatedModal getProducts={props.getProducts} showModal={showModal} onClose={() => setShowModal(false)} chosenItem={compareItems} currentProduct={currentProduct}/>

      </div>
    </div>
  )
}


export default RelatedProducts