import React from 'react';

const Sort = props => {
  var reviews = props.reviews;

  return (
    <div>
      <span>
        {reviews.length} reviews, sorted by
        <span>
          &nbsp;
          <select onChange={() => props.handleSort(event)}>
            <option value="relevance">relevance</option>
            <option value="helpfulness">helpfulness</option>
            <option value="newest">newest</option>
          </select>
        </span>
      </span>
    </div>
  )
}

export default Sort;