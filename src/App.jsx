import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './widgets/Ratings/Ratings.jsx';
import Overview from './widgets/Overview/Overview.jsx';
import RelatedSection from './widgets/Related/RelatedSection.jsx';
import Questions from './widgets/Questions/Questions.jsx';
const { url, API_TOKEN } = require('/config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const App = (props) => {

  const [getProducts, setGetProducts] = useState({});

  return (
  <div>
    <Overview getProducts={getProducts} />
    <RelatedSection products={getProducts} setProducts={setGetProducts}/>
    <Questions />
    <Ratings />
  </div>)
}

export default App;