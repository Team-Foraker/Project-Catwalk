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
  const [search, setSearch] = useState('')

  useEffect( () => {
    axios.get(url + 'products')
      .then( (products) => {
        setGetProducts(products.data[2])
      })
  }, [])

  const handleSearch = function(event) {
    event.preventDefault();
    // this is the search functionality that Ben was working on
  }

  return (
  <div>
    <div>Project Catwalk<form><input type="text" onChange={ (e) => setSearch(e.target.value)}></input><input type="submit" onClick={(e) => handleSearch(e)}></input></form></div>
    <Overview getProducts={getProducts} />
    <RelatedSection getProducts={getProducts}/>
    <Questions />
    <Ratings />
  </div>)
}

export default App;