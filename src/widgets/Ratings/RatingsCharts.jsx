import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url, API_TOKEN } from "/config.js";

import AverageStars from './AverageStars.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import StarsBarCharts from './StarsBarCharts.jsx';
import SizeBreakdown from './SizeBreakdown.jsx';
import ComfortBreakdown from './ComfortBreakdown.jsx';

const RatingsCharts = props => {
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    axios.get(`${url}reviews/meta?product_id=19289`, {
      headers: { Authorization: API_TOKEN },
    })
      .then(response => {
        // console.log(response.data)
      })
  }, [])

  return (
    <div className="ratings-charts-container">
      <AverageStars />
      <PercentRecommended />
      <StarsBarCharts />
      <SizeBreakdown />
      <ComfortBreakdown />
    </div>
  )
}

export default RatingsCharts;