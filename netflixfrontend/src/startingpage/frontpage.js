import React, {useState} from 'react';
import {ChevronRight } from 'lucide-react';
import { Globe } from 'lucide-react';
import axios from "axios";
import {useNavigate } from 'react-router-dom';


function Frontpage(){
  const navigate = useNavigate();
  const [name , setName ] =useState('');

 

 function handleChange(event){
  setName(
     event.target.value
  );
}

 
  async function handleClick(event){
    setName(name);
  event.preventDefault();


  try {
    const response =  await axios.post('https://server-9iiw.onrender.com//p', {name });
   if(response.data.message==='found user'){
    navigate("/login");
  }
else{
   navigate("/signup")
}
  } 
  catch (error) {
    console.error('Error submitting email:', error);
  }
  }
  










  
    return( 
     <div className='parent'>
      <div className="content">
        <div className="nav">
        <div className="logo">
      <img src="https://img.icons8.com/color/170/netflix.png" alt="netflix"/>
      </div>
      <div className="btns">
        <div>
      <a href='##'>
        <button className="btn">
          <Globe size={16}/>&nbsp;&nbsp;English
          </button>
          </a>
          </div>
          <div>
            <a href="/login">
        <button className="btn2" >Sign In</button>
        </a>
        </div>  
      </div>
      </div>
      <div className="container">
      <link href='https://fonts.googleapis.com/css?family=Archivo Black' rel='stylesheet'/>

     <h1>Unlimited movies, TV shows and more</h1>
     <p>Watch anywhere. Cancel anytime.</p>
     <p className="p2" >Ready to watch? Enter your email to create or restart your membership.</p>

     <form onSubmit={handleClick}>
     <div className='morebtn'>
     <div>
        <input
        className='btn3'
        type='email'
        placeholder='Email address'
        value={name}
        name="email"
        onChange={handleChange}>
        </input>
      </div>
      <div>
      <button className='btn4' >Get Started<ChevronRight size={30}  stroke-width={2}/></button>
      </div>
      </div>
      </form>

      </div>
     
      </div>
      <div className="bgbg"><img  src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"  alt="front page background" /></div>
      
    </div>
    )
}
export default Frontpage ;
