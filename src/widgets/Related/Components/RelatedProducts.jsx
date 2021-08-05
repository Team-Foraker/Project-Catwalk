import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedModal from './RelatedModal.jsx'
import AverageStarRating from '../../shared/AverageStarRating.jsx';
const { url, API_TOKEN } = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const RelatedProducts = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(relatedProducts.length);
  const [showModal, setShowModal] = useState(false);
  const [compareItems, setCompareItems] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [reviewCount, setReviewCount] = useState([]);
  const [average, setAverage] = useState([]);
  const [styles, setStyles] = useState(0);


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

  const getStarRatings = (arrayProductID) => {
    const promise = arrayProductID.map((id) => {
      return axios.get(url + `reviews/meta?product_id=${id}`)
        .then()
        .catch();
    })
    return Promise.all(promise);
  }

  useEffect(() => {
    if (props.getProducts.id) {
      axios.get(url + `products/${props.getProducts.id}`)
        .then((res) => {
          setCurrentProduct(res.data)
        })
      axios.get(url + `products/${props.getProducts.id}/styles`)
        .then((res) => {
          setStyles(res.data.results.length)
        })
      axios.get(url + `products/${props.getProducts.id}/related`)
        .then((res) => {
          getStarRatings(res.data)
            .then((res) => {
              let individualRating = res.map((indv) => {
                return indv.data.ratings
              });
              return individualRating;
            })
            .then((res) => {
              let indivdualCalculations = res.map((cal) => {
                let ratings = Object.keys(cal);
                let reviews = 0;
                let totalStars = 0;
                for (let i = 0; i < ratings.length; i++) {
                  reviews += JSON.parse(cal[ratings[i]])
                  totalStars += JSON.parse(cal[ratings[i]]) * ratings[i]
                }
                let unroundedAverage = totalStars / reviews
                return unroundedAverage.toFixed(1)
              });
              setAverage(indivdualCalculations);
            });
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
                  setRightCount(arrayRP.length);
                })
            })
        })
    }
  }, [props.getProducts])




  return (
    <div>
      <h3 className='related-header'>RELATED PRODUCTS</h3>
      <div className='related-cards'>
        {leftCount !== 0 ? (
          <i className='left-arrow' onClick={() => {
            decrement();
          }}>
          </i>
        ) : (null)}

        {relatedProducts.slice(leftCount, rightCount).map((item, index) => {
          if (index < 4) {
            return (

            <div key={index} className='related-products'>
              <img className='star-image' src={'https://clipart.info/images/ccovers/1559839515silver-star-png-11.png'} onClick={() => {
                setShowModal(true);
                setCompareItems(item);}}/>
              <img className='related-image' src={item.results[0].photos[0].thumbnail_url} />
              <div className='related-category'>{item.category}</div>
              <div className='related-name'>{item.name}</div>
              {item.sale_price ? (
                <div>
                  <s className='related-price' style={{ color: 'red' }}>${item.default_price}</s>
                  <div className='related-price'>${item.sale_price}</div>
                </div>
              ) : (<div className='related-price'>${item.default_price}</div>)}
              <AverageStarRating className='related-rating' average={average[index]} />

            </div>
            )
          }
        }
        )}

        {leftCount !== rightCount - 4 ? (
          <i className='right-arrow' onClick={() => {
            increment();
          }}>
          </i>
        ) : (null)}

        <RelatedModal getProducts={props.getProducts} showModal={showModal} onClose={() => setShowModal(false)} chosenItem={compareItems} currentProduct={currentProduct} numOfStyles={styles}/>

      </div>
    </div>
  )
}


export default RelatedProducts