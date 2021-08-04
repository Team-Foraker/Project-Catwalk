import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url, API_TOKEN } from "/config.js";
import StarRating from '../shared/StarRating.jsx';
import CharacteristicScale from './CharacteristicScale.jsx';


const CreateReview = props => {
  const [hideModal, setHideModal] = useState();
  const [averageRating, setAverageRating] = useState(0);
  const [recommend, setRecommend] = useState();
  const [characteristics, setCharacteristics] = useState([]);
  const [charObj, setCharObj] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (props.characteristics !== undefined) {
      setCharacteristics(Object.entries(props.characteristics));
    }
  }, [props.characteristics])

  var handleRatingClick = (event) => {
    setAverageRating(parseInt(event.target.getAttribute('data-index')));
  }

  var handleScaleClick = (event) => {
    var newObj = { ...charObj, }
    newObj[event.target.getAttribute('data-key')] = parseInt(event.target.value);
    setCharObj(newObj);
  }

  var formValidate = () => {
    var isValid = true;

    var emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)

    if (averageRating === 0) {
      isValid = false;
    }
    if (body.length < 50) {
      isValid = false;
    }
    if (!emailPattern.test(email)) {
      isValid = false;
    }

    return isValid;
  }

  var handleSubmit = (event) => {
    // console.log('submitted');
    var recommend = recommend === 'true' ? true : false;
    var validated = formValidate();
    // console.log(validated)
    if (validated) {
      var postObj = {
        product_id: props.product,
        rating: averageRating,
        recommend: recommend,
        summary: summary,
        body: body,
        name: name,
        email: email,
        characteristics: charObj,
      }
      alert(postObj.product_id)

      axios.post(`${url}reviews`, postObj)
        .then(response => {
          // console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      event.preventDefault();
      // console.log(postObj)
    }
  }

  var onValueChange = (event, group) => {
    group(event.target.value);
  }

  var onChange = (event, stateName) => {
    stateName(event.target.value);
  }

  return (
    <div id="myModal" className="ratings-modal" style={{ display: props.status ? 'block' : 'none' }}>

      <div className="ratings-modal-content">
        <div>
          <span className="close" onClick={props.modalOff}>&times;</span>

        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>Write Your Review</div>

            <div>
              <label htmlFor="overall-rating">Overall rating (madatory)</label>
              <div className="form-star-rating">
                <StarRating onClick={handleRatingClick} />
              </div>
            </div>

            <div>
              <label htmlFor="recommend" required>Do you recommend this product? (mandatory)</label>

              <label htmlFor="Yes">
                <input required type="radio" value={true} name="recommend"
                  onChange={() => onValueChange(event, setRecommend)}/>
                Yes
              </label>

              <label htmlFor="No">
                <input required type="radio" value={false} name="recommend"
                  onChange={() => onValueChange(event, setRecommend)} />
                No
              </label>
            </div>

            <div>
              <label htmlFor="">Characteristics (mandatory)</label>
              {
                characteristics.map((char, index) => {
                  return <CharacteristicScale char={char} key={index} handleScaleClick={handleScaleClick} />
                })
              }
            </div>

            <div>
              <label htmlFor="">Review summary</label>
              <input type="text" maxLength="60" placeholder="Example: Best purchase ever!" value={summary} onChange={() => onChange(event, setSummary)} />
            </div>

            <div>
              <label htmlFor="">Review body (mandatory)</label>
              <textarea maxLength="1000" placeholder="Why did you like the product or not?" value={body} onChange={() => onChange(event, setBody)} />
            </div>

            <div>
              <label htmlFor="">What is your nickname (mandatory)</label>
              <input required type="text" maxLength="60" placeholder="Example: jackson11!" onChange={() => onChange(event, setName)} />
              <small>For privacy reasons, do not use your full name or email address</small>
            </div>

            <div>
              <label htmlFor="">Your email (mandatory)</label>
              <input required type="text" maxLength="60" placeholder="Example: jackson11@email.com" onChange={() => onChange(event, setEmail)} />
              <small>For authentication reasons, you will not be emailed</small>
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