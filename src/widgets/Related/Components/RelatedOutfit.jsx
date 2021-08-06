import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "regenerator-runtime/runtime.js"
import AverageStarRating from '../../shared/AverageStarRating.jsx';
const { url, API_TOKEN } = require('../../../../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;



const RelatedOutfits = (props) => {


  const initialState = {
    id: '',
    category: '',
    name: '',
    default_price: '',
    results: [
      {
        photos: [
          {
            thumbnail_url: 'https://image.flaticon.com/icons/png/512/32/32339.png'
          }
        ]
      }
    ]
  }



  const [outfitProducts, setOutfitProducts] = useState([initialState]);
  const [outfitLeftCount, setOutfitLeftCount] = useState(0);
  const [outfitRightCount, setOutfitRightCount] = useState(outfitProducts.length);
  const [average, setAverage] = useState(0);

  const getImagesAndCombine = async (product) => {
    try {
      const res = await axios.get(
        url + `products/${props.getProducts.id}/styles`
      );
      return Object.assign({}, res.data, product);
    } catch (err) {
      console.log(err)
    }
  }


  const addOutfit = async () => {
    const productAndStyles = await getImagesAndCombine(props.getProducts);
    setOutfitProducts((outfit) => {
      outfit.splice(1, 0, productAndStyles);
      const sort = [
        ...new Map(outfitProducts.map((product) => [product['id'], product])).values()
      ];
      localStorage.setItem('foraker', JSON.stringify(sort));
      return sort;
    })
  }

  const removeOutfit = async (index) => {
    setOutfitProducts((product) => {
      let temp = product.slice();
      temp.splice(index, 1);
      localStorage.setItem('foraker', JSON.stringify(temp));
      return temp;
    })
  }

  useEffect(() => {
    if (localStorage.getItem('foraker') !== null) {
      let data = localStorage.getItem('foraker');
      setOutfitRightCount(() => {
        return JSON.parse(data).length;
      });
      setOutfitProducts((prev) => {
        return JSON.parse(data);
      });
    }
    axios.get(url + 'reviews/meta?product_id=' + props.getProducts.id)
        .then( (results) => {
          let ratings = Object.keys(results.data.ratings);
          let reviews = 0;
          var totalStars = 0;
          for (var i = 0; i < ratings.length; i++) {
            reviews += JSON.parse(results.data.ratings[ratings[i]]);
            totalStars += JSON.parse(results.data.ratings[ratings[i]]) * ratings[i]
          }
          let unroundedAverage = (totalStars / reviews).toFixed(1)
          setAverage(unroundedAverage)
        })
  }, [localStorage.getItem('foraker')])

  return (
    <div>
      <h3>YOUR OUTFIT</h3>
      <div className='related-cards'>

        {outfitLeftCount !== 0 ? (
          <i className='left-arrow' onClick={() => {
            setOutfitLeftCount((outfitLeftCount) => {
              if (outfitLeftCount !== 0) {
                return outfitLeftCount - 1;
              } else {
                return 0;
              }
            })
          }}>
          </i>
        ) : (null)}

        {outfitProducts.slice(outfitLeftCount, outfitRightCount).map((item, index) => {
          if (item.results[0] && index < 4) {
            return (
              <div className={item.id === '' ? 'plus-sign' : 'related-products'} key={index}>
                {item.id !== '' ? (
                  <img className='star-image' onClick={() => {
                    removeOutfit(index);
                  }} src={'https://www.lifepng.com/wp-content/uploads/2020/12/Letter-X-Roundlet-png-hd.png'} />
                ) : (null)}
                <img className={item.id === '' ? 'plus-image' : 'related-image'} onClick={() => {
                  addOutfit();
                }} src={item.results[0].photos[0].thumbnail_url} />
                <div className='related-category'>{item.category}</div>
                <div className='related-name'>{item.name}</div>
                {item.id !== '' ? (
                  <div className='related-price'>${item.default_price}</div>
                ) : (null)}
                {item.id !== '' ? (
                  <AverageStarRating average={average}/>
                ) : (null)}
              </div>
            )
          }
        }
        )}

        {outfitRightCount > 4 && outfitLeftCount < outfitRightCount - 4 ? (
          <i className='right-arrow' onClick={() => {
            setOutfitLeftCount((outfitLeftCount) => {
              return outfitLeftCount + 1;
            })
          }}>
          </i>
        ) : (null)}
      </div>
    </div>
  )
}

export default RelatedOutfits;