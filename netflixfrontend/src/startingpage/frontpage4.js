import React from 'react';


function Frontpage4(){
return(
<div className='twopage'>
    <div className='rowone'>
        <h1>Watch everywhere</h1>
        <p>Stream unlimited movies and TV shows on your <br></br>phone, tablet, laptop, and TV.</p></div>
    <div className='rowtwo'>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="TV2" />
        <video  autoPlay={true} playsInline={true} muted={true} loop={true} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" ></video>
    </div>
</div>
) 
}
export default Frontpage4 ;