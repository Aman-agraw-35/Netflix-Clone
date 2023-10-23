import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay ,faPlus ,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import React,{useState} from 'react';
function Card(props){
    const [isShown, setIsShown] = useState(true);
const [liked , setLiked]=useState(false)
const [like, setLike]=useState(false)
function handleClic(event){

  setLiked((prev =>{
   return prev===false ? true : false ;
  }))
 event.preventDefault();
}
function handleClick(event){
    setLike((prev =>{
        return prev===false ? true : false ;
       }))
      event.preventDefault();
    }
return (
<div className='card hehe'  onMouseEnter={() => setIsShown(false)}   onMouseLeave={() => setIsShown(true)} >
    <div className='upper'>
    <img src={props.url} alt={props.name}/>
    <h6>{props.name}</h6>
    </div>
    { isShown ? <div></div> :  <div    className='blackspace'>
        <div className='up'>
    <button className='bt1' onClick={(hand => (alert('The API IN THIS WEBSITE DO NOT HAVE VIDEOS .')))} ><FontAwesomeIcon icon={faPlay} aria-hidden={true} size="sm" style={{color: "#000000"}  } /></button>
    <button className='bt2 '  onClick={(hand => (alert('No more info available.')))}  ><FontAwesomeIcon icon={faPlus} size="lg" style={{color: "#ffffff",}} /></button>
    <button onClick={handleClic} className='bt2'><FontAwesomeIcon icon={faThumbsUp} size="lg" style={liked===false ? {color: "#ffffff"} :{color: "pink"}} /></button>
    <button onClick={handleClick} className='bt2 scroll'><FontAwesomeIcon icon={faAngleDown} size="lg" style={like===false ? {color: "#ffffff"} :{color: "green"}} /></button>
    </div>
    <div className='bottom'>
        <p>Released on : {props.date}</p>
        <p>TMDB : {props.rating}</p>
    </div>

    </div>  }
</div>
)
}
export default Card ;