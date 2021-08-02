import React, { useState, useEffect } from 'react';
import CharacteristicChart from './CharacteristicChart.jsx';

const Breakdown = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if(props.characteristics !== undefined) {
      setCategories(Object.entries(props.characteristics))
    }
  }, [props.characteristics]);

  return (
    categories.map((category, index) => {
      var catName = category[0];
      var catObj = category[1];
      var labels = makeLabels(catName);

      return <CharacteristicChart key={index} catName={catName} catObj={catObj} labels={labels}/>
    })
  )
}


// helper
function makeLabels(key) {
  let charObj = {
    L: null,
    M: null,
    R: null,
  };

  if (key === 'Size') {
    charObj.L = 'Too small';
    charObj.M = 'Perfect';
    charObj.R = 'Too wide';
  }
  if (key === 'Width') {
    charObj.L = 'Too narrow';
    charObj.M = 'Perfect';
    charObj.R = 'Too wide';
  }
  if (key === 'Comfort') {
    charObj.L = 'Uncomfortable';
    charObj.M = 'Ok';
    charObj.R = 'Perfect';
  }
  if (key === 'Quality') {
    charObj.L = 'Poor';
    charObj.M = 'What I expected';
    charObj.R = 'Perfect';
  }
  if (key === 'Length') {
    charObj.L = 'Runs short';
    charObj.M = 'Perfect';
    charObj.R = 'Runs long';
  }
  if (key === 'Fit') {
    charObj.L = 'Runs tight';
    charObj.M = 'Perfect';
    charObj.R = 'Runs long';
  }

  return charObj;
};

export default Breakdown;