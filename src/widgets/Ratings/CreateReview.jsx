import React, { useState, useEffect } from 'react';
import StarRating from '../shared/StarRating.jsx';
const CreateReview = props => {
  const [hideModal, setHideModal] = useState();

  return (
    <div id="myModal" className="modal" style={{ display: props.status ? 'block' : 'none' }}>

      <div className="modal-content">
        <div>
          <span className="close" onClick={props.modalOff}>&times;</span>

        </div>
        <div>
          <form>
            <div>
              <label htmlFor="overall-rating">Overall Rating:</label>
              <StarRating />
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default CreateReview;