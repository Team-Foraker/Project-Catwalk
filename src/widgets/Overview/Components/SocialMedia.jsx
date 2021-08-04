import React from 'react';

const SocialMedia = function(props) {
  // this is a stand in until later, for the full functionality

  const tweet = "?text=Found%20this%20on%20Project%20Catwalk"

  const handleClick = function(event){
    event.preventDefault();
    window.open(event.target.href)
  }

  return (
    <div id="social-media">
      <div className="fb-share-button" data-href="http://localhost:3000/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Found this over on Project Catwalk:" data-related="@Project_Catwalk" data-show-count="false">Tweet</a>
      <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" onClick={(e) => handleClick(e)}></a>
      {/* <button><a className="twitter-share-button" href={"https://twitter.com/intent/tweet" + tweet} onClick={(e)=> handleClick(e)} >Share on Twitter</a></button>
      <button><a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" onClick={(e)=> handleClick(e)} >Share to Pinterest</a></button> */}
    </div>
  )
}

export default SocialMedia;