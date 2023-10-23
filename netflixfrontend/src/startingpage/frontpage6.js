import React,{useState} from 'react';
import {ChevronRight} from "lucide-react";

import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Frontpage6() {

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
    const response =  await axios.post('http://localhost:8000/p', {name });
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
     
    <div className='sixpage'>
        <div className="box">
      <h1 className='nameing'>Frequently Asked Questions</h1>
      <div className='question'>
        <ul>
            <li>What is Netflix?</li>
            <li>How much does Netflix cost?</li>
            <li>Where can I watch?</li>
            <li>How do I cancel?</li>
            <li>What can I watch on Netflix?</li>
            <li>Is Netflix good for kids?</li>
        </ul>
        <div className='bottomline'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handleClick}>
        <div className='morebtn'>
     <div>
        <input className='btn3' placeholder='Email address' type='Email'  name="email" value={name} onChange={handleChange}></input>
      </div>
      <div>
      <button className='btn4'>Get Started<ChevronRight size={30} stroke-width={2}/></button>
      </div>
      </div>
      </form>
     
      </div>
      </div>
      </div>
     
        </div>
      
   
)         
    
}

export default Frontpage6 ;