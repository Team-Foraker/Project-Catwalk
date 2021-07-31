import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Overview from '../../Overview/Overview.jsx'



const RelatedOutfits = (props) => {



  const initialState = {
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

  const addOutfit = () => {


  }

  const removeOutfit = () => {

  }


  const [outfitProducts, setOutfitProducts] = useState([initialState]);
  const [outfitLeftCount, setOutfitLeftCount] = useState(0);
  const [outfitRightCount, setOutfitRightCount] = useState(outfitProducts.length);

  return (
    <div>
      <h3>Your Outfit Section</h3>
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

        {outfitProducts.slice(outfitLeftCount, outfitRightCount).map((item, index) =>
          <div key={index} style={{ border: '1px solid black', width: '20%', margin: '3px', height: '250px' }}>
            <img className='related-image' src={item.results[0].photos[0].thumbnail_url} />
            <div className='related-category'>{item.category}</div>
            <div className='related-name'>{item.name}</div>
            {item.name !== '' ? (
              <div className='related-price'>${item.default_price}</div>
            ) : ('')}
            {item.name !== '' ? (
              <div className='related-rating'>StarRating</div>
            ) : ('')}
          </div>
        )}

        {outfitLeftCount !== outfitRightCount - 1 ? (
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