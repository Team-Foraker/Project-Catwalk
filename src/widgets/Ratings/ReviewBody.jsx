import React, { useState, useEffect } from 'react';

const ReviewBody = ({ body }) => {
  const [display, setDisplay] = useState('');
  const [full, setFull] = useState(true);

  useEffect(() => {
    if (body) {
      if (body.length > 250) {
        setDisplay(body.slice(0, 250) + '...');
        setFull(false);
      } else (
        setDisplay(body)
      )
    }
  }, [body])

  const showMore = () => {
    setDisplay(body);
    setFull(true);
  }

  return (
    <div>
      <div>
        {display}
      </div>
      <div>
        {
        !full &&
        <button onClick={showMore}>Show more</button>
        }
      </div>
    </div>
  )
}

export default ReviewBody;