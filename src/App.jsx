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
    if (search === '') {
      axios.get(url + 'products?count=' + 0 + 1)
      .then( (results) => {
        setGetProducts(results.data[0])
      })
    } else {
      axios.get(url + 'products?count=' + search + 1)
        .then( (results) => {
          console.log(results.data[JSON.parse(search)])
          setGetProducts(results.data[search])
        })
    }
  }

  return (
    <React.Fragment>
      {getProducts.id
      ? <div id="app">
        <div className="nav-bar" ><h1>Project Catwalk</h1><form id="main-search" ><input className="search-bar" type="text" value={search} onChange={ (e) => setSearch(e.target.value)}></input><input className="submit" type="submit" onClick={(e) => handleSearch(e)}></input></form></div>
        <div id="announcements"><p><i>SITE-WIDE ANNOUNCEMENT MESSAGE!</i> — SALE/DISCOUNT <b>OFFER</b> — <u>NEW PRODUCT HIGHLIGHT</u></p></div>
        <Overview getProducts={getProducts} />
        <RelatedSection getProducts={getProducts} />
        {/* <Questions /> */}
        <Ratings product={getProducts}/>
      </div>
      : <div></div>}
    </React.Fragment>
  )
}

export default App;