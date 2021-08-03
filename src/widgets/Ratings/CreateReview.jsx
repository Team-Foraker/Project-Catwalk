import React, { useState, useEffect } from 'react';
import StarRating from '../shared/StarRating.jsx';
import CharacteristicScale from './CharacteristicScale.jsx';

const CreateReview = props => {
  const [hideModal, setHideModal] = useState();
  const [averageRating, setAverageRating] = useState(0);
  const [recommend, setRecommend] = useState();
  const [characteristics, setCharacteristics] = useState([]);
  const [charObj, setCharObj] = useState({});

  useEffect(() => {
    if (props.characteristics !== undefined) {
      setCharacteristics(Object.entries(props.characteristics));
    }
  }, [props.characteristics])

  var handleRatingClick = (event) => {
    console.log(event.target);
    setAverageRating(parseInt(event.target.getAttribute('data-index')));
  }

  var handleScaleClick = (event) => {
    var newObj = {...charObj,}
    newObj[event.target.getAttribute('data-key')] = parseInt(event.target.value);
    setCharObj(newObj);
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');

    var postObj = {
      product_id: props.product,
      rating: averageRating,
      recommend: JSON.parse(recommend),
      characteristics: charObj,
    }
    console.log(postObj)
  }

  var onValueChange = (event, group) => {
    group(event.target.value);
  }

  return (
    <div id="myModal" className="modal" style={{ display: props.status ? 'block' : 'none' }}>

      <div className="modal-content">
        <div>
          <span className="close" onClick={props.modalOff}>&times;</span>

        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>Write Your Review</div>

            <div>
              <label htmlFor="overall-rating">Overall Rating</label>
              <div className="form-star-rating">
                <StarRating onClick={handleRatingClick} />
              </div>
            </div>

            <div>
              <label htmlFor="recommend">Do you recommend this product?</label>

              <label htmlFor="Yes">
                <input type="radio" value={true} name="recommend"
                onChange={() => onValueChange(event, setRecommend)}/>
                Yes
              </label>

              <label htmlFor="No">
                <input type="radio" value={false} name="recommend"
                onChange={() => onValueChange(event, setRecommend)}/>
                No
              </label>
            </div>

            <div>
              {
                characteristics.map((char, index) => {
                  return <CharacteristicScale char={char} key={index} handleScaleClick={handleScaleClick}/>
                })
              }
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default CreateReview;