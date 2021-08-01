import React from 'react';
import Ratings from './widgets/Ratings/Ratings.jsx';
import Overview from './widgets/Overview/Overview.jsx';
import RelatedSection from './widgets/Related/RelatedSection.jsx';
import Questions from './widgets/Questions/Questions.jsx';

const App = (props) => {
  return (<div>
    <Overview />
    <RelatedSection />
    <Questions />
    <Ratings />
  </div>)
}

export default App;