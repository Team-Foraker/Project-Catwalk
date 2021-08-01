import React from 'react';

const StarsBarCharts = props => {
  const ratings = props.ratings;

  const [totalRatings, setTotalRatings] = useState(0);
  const [fives, setFives] = useState(0);
  const [fours, setFours] = useState(0);
  const [threes, setThrees] = useState(0);
  const [twos, setTwos] = useState(0);
  const [ones, setOnes] = useState(0);
  const [ratingsArr, setRatingsArr] = useState([]);

  useEffect(() => {
    var totalReviews = 0;
    for (var key in ratings) {
      totalReviews += parseInt(ratings[key]);
    }
    setTotalRatings(totalReviews);
    if (ratings){
      setFives(Math.round(Number(ratings[5])/totalReviews * 100));
      setFours(Math.round(Number(ratings[4])/totalReviews * 100));
      setThrees(Math.round(Number(ratings[3])/totalReviews * 100));
      setTwos(Math.round(Number(ratings[2])/totalReviews * 100));
      setOnes(Math.round(Number(ratings[1])/totalReviews * 100));
    }
  })

