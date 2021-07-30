import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url, API_TOKEN } from "/config.js";

import AverageStars from './AverageStars.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import StarsBarCharts from './StarsBarCharts.jsx';
import SizeBreakdown from './SizeBreakdown.jsx';
import ComfortBreakdown from './ComfortBreakdown.jsx';

const RatingsCharts = props => {
  return (
    <div className="ratings-charts-container">
      <AverageStars ratings={props.metaData.ratings}/>
      <PercentRecommended recommended={props.metaData.recommended}/>
      <StarsBarCharts />
      <SizeBreakdown />
      <ComfortBreakdown />
    </div>
  )
}

export default RatingsCharts;