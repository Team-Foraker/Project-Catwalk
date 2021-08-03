import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "regenerator-runtime/runtime.js"
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
      outfit.push(productAndStyles);
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
  }, [])




  return (
    <div>
      <h3>YOUR OUTFIT</h3>
      <div className='outfit-cards' style={{ display: 'flex', flexDirection: 'row', width: 'fitContent', position: 'relative' }}>

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
          if (item.results[0]) {
            return (
              <div className='related-products' key={index}>
                {item.id !== '' ? (
                  <img className='star-image' onClick={() => {
                    removeOutfit(index);
                  }} src={'https://www.lifepng.com/wp-content/uploads/2020/12/Letter-X-Roundlet-png-hd.png'} />
                ) : (null)}
                <img className='related-image' onClick={() => {
                  addOutfit();
                }} src={item.results[0].photos[0].thumbnail_url} />
                <div className='related-category'>{item.category}</div>
                <div className='related-name'>{item.name}</div>
                {item.id !== '' ? (
                  <div className='related-price'>${item.default_price}</div>
                ) : (null)}
                {item.id !== '' ? (
                  <div className='related-rating'>StarRating</div>
                ) : (null)}
              </div>
            )
          }
        }
        )}

        {outfitLeftCount !== outfitRightCount - 4 ? (
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