import React from 'react';
import Ratings from './widgets/Ratings/Ratings.jsx';
import Overview from './widgets/Overview/Overview.jsx';
import RelatedItems from './widgets/Related/RelatedItems.jsx';
import Questions from './widgets/Questions/Questions.jsx';

const App = (props) => {
  return (<div>
    <Overview />
    <RelatedItems />
    <Questions />
    <Ratings />
  </div>)
}

export default App;