import React from 'react';


function Frontpage2(){
    return( <div className='twopage'>
<div className="rowone">
<h1>Enjoy on your TV</h1>
<p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
</div>
<div className="rowtwo">
    <div className="img_bg">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" autoPlay={true} muted={true} loop={true}> </video>
    </div>
</div>
    </div>
    )
}
export default Frontpage2 ;