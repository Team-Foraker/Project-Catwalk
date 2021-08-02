import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './widgets/Ratings/Ratings.jsx';
import Overview from './widgets/Overview/Overview.jsx';
import RelatedSection from './widgets/Related/RelatedSection.jsx';
import Questions from './widgets/Questions/Questions.jsx';
const { url, API_TOKEN } = require('../config.js');
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const App = (props) => {

  const [getProducts, setGetProducts] = useState({});

  useEffect( () => {
    axios.get(url + 'products')
      .then( (products) => {
        setGetProducts(products.data[0])
      })
  }, [])

  return (
  <div>
    <Overview getProducts={getProducts} />
    <RelatedSection getProducts={getProducts}/>
    <Questions />
    <Ratings />
  </div>)
}

export default App;