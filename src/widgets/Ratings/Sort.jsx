import React from 'react';

const Sort = props => {
  var reviews = props.reviews;

  return (
    <div>
      <span className="sort-summary">
        {reviews.length} reviews, sorted by
      </span>
      <span>
        &nbsp;
        <select className="sort-select" onChange={() => props.handleSort(event)}>
          <option value="relevance">relevance</option>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
        </select>
      </span>
    </div>
  )
}

export default Sort;