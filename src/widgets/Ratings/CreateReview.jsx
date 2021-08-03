import React, {useState, useEffect} from 'react';

const CreateReview = props => {
  const [hideModal, setHideModal] = useState();

  return (
    <div id="myModal" className="modal" style={{display: props.status ? 'block' : 'none'}}>

      <div className="modal-content">
        <span className="close" onClick={props.modalOff}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>

    </div>
  )
}

export default CreateReview;