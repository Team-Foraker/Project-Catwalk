
import React from 'react';

// this is the characteristic bar
// there are 3 seperate bars in-line
// the triangle goes left or right depending on the value from metaData
// the formula for 'value' is in charRatingList

const CharRating = ({
  labelTitle,
  leftLabel,
  middleLabel,
  rightLabel,
  value,
}) => {
  const optionalLeftLabel = leftLabel ? <span>{leftLabel}</span> : '';
  const optionalMiddleLabel = middleLabel ? <span>{middleLabel}</span> : '';
  const optionalRightLabel = rightLabel ? <span>{rightLabel}</span> : '';

  return (
    <div className='char-wrapper'>
      <div className='label-title'>
        <span>{labelTitle}</span>
      </div>
      <div className='outer-bar'>
        <div className='inner-bar'>
          <span
            style={{
              fontSize: '18px',
              marginLeft: `${value}%`,
              lineHeight: '10px',
              opacity: '50%',
            }}>
            &#x25BC;
          </span>
        </div>
        <div className='label-left'>
          <span>{optionalLeftLabel}</span>
        </div>
      </div>
      <div className='outer-bar'>
        <div className='inner-bar'></div>
        <div className='label-center'>{optionalMiddleLabel}</div>
      </div>
      <div className='outer-bar'>
        <div className='inner-bar'></div>
        <div className='label-right'>
          <span>{optionalRightLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default CharRating;