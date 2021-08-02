import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url, API_TOKEN } from "/config.js";

import AverageStars from './AverageStars.jsx';
import PercentRecommended from './PercentRecommended.jsx';
import StarsBarCharts from './StarsBarCharts.jsx';
import Breakdown from './Breakdown.jsx';

const RatingsCharts = props => {
  return (
    <div className="ratings-charts-container">
      <AverageStars ratings={props.metaData.ratings}/>
      <PercentRecommended recommended={props.metaData.recommended}/>
      <StarsBarCharts ratings={props.metaData.ratings}/>
      <Breakdown characteristics={props.metaData.characteristics}/>
    </div>
  )
}

export default RatingsCharts;