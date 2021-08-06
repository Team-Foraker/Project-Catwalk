import React, { useState, useEffect } from 'react';

const CharacteristicScale = props => {
  const [labels, setLabels] = useState({});

  useEffect(() => {
    if (props.char) {
      setLabels(labelHelper(props.char[0]));
    }
  }, [props.char]);

  return (
    <div className="form-group">
      <div>{props.char[0]}</div>

      <div className="ratings-radio-container">
        <div className="scale-container">
          <input className="form-check-input" onClick={props.handleScaleClick} data-key={props.char[1].id} type="radio" value="1" name={props.char[0]} />
        </div>

        <div className="scale-container">
          <input className="form-check-input" required onClick={props.handleScaleClick} data-key={props.char[1].id} type="radio" value="2" name={props.char[0]} />
        </div>

        <div className="scale-container">
          <input className="form-check-input" onClick={props.handleScaleClick} data-key={props.char[1].id} type="radio" value="3" name={props.char[0]} />
        </div>

        <div className="scale-container">
          <input className="form-check-input" onClick={props.handleScaleClick} data-key={props.char[1].id} type="radio" value="4" name={props.char[0]} />
        </div>

        <div className="scale-container">
          <input className="form-check-input" onClick={props.handleScaleClick} data-key={props.char[1].id} type="radio" value="5" name={props.char[0]} />

        </div>
      </div>
      <div className="radio-label-container">
        <small>
          {labels[1]}
        </small>
        <small>
          {labels[5]}
        </small>
      </div>
    </div>
  )
}

function labelHelper(char) {
  var obj = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  };

  if (char === 'Size') {
    obj = {
      1: 'A size too small',
      2: '1/2 a size too small',
      3: 'Perfect',
      4: '1/2 a size too big',
      5: 'A size too big',
    };
  } else if (char === 'Width') {
    obj = {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    };
  } else if (char === 'Comfort') {
    obj = {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    };
  } else if (char === 'Quality') {
    obj = {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    };
  } else if (char === 'Length') {
    obj = {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    };
  } else if (char === 'Fit') {
    obj = {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly loose',
      5: 'Runs loose',
    };
  }

  return obj;
}

export default CharacteristicScale;