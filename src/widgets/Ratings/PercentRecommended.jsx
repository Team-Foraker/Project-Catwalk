import React, {useState, useEffect} from 'react';

const PercentRecommended = props => {
  const [recommends, setRecommends] = useState('');
  const [notRecommends, setNotRecommends] = useState('');
  const [percentRecommends, setPercentRecommends] = useState(0);

  useEffect(() => {
    for (var key in props.recommended) {
      if (key === 'true') {
        setRecommends(parseInt(props.recommended[key]));
      } else if (key === 'false') {
        setNotRecommends(parseInt(props.recommended[key]))
      }
    }
    var totalReviews = recommends + notRecommends;
    setPercentRecommends(Math.floor((recommends/totalReviews) * 100))
  })

  return (
    <div>
      {String(percentRecommends)}% of reviews recommend this product
    </div>
  )
}

export default PercentRecommended;