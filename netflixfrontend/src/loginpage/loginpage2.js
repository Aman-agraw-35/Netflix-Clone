
import React, { useEffect ,useState } from 'react';
import { Globe } from 'lucide-react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Loginpage2(){ 

    const [userrr, setUser] = useState(' ');
    const [inpass , setinpass] = useState(false);
    const [learn ,setlearn] =useState(false);
    useEffect(() => {
    axios.get('https://server-9iiw.onrender.com/p')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
      });
  }, []);
  
  const [pass , setpass ] =useState('');
  const navigate = useNavigate()
 

 function handleChange(event){
  setpass(
     event.target.value
  );
}
function handle(event){
  setlearn(true);
  event.preventDefault();
}

function handleChang(event){
  setUser(
     event.target.value
  );
  console.log(userrr);
}
 
  async function handleClick(event){
    setpass(pass);
  event.preventDefault();
  if(pass !==  "" ){

  try {
    const response =  await axios.post('https://server-9iiw.onrender.com/datas', {email : {userrr} , password : {pass}} );
    if(response.data.message==='found user'){
      navigate("/browse");
    }
  else{
    setinpass(true);
  }
  } catch (error) {
    console.error('Error submitting email:', error);
  }
}
  }
  
  

return(
<div className='login login1'>

<div className='navig navig1'>

    <div className='logoone logone1'> 
 <img src="https://img.icons8.com/color/170/netflix.png" alt="netflx" />

    </div>
  
</div>
<div className='firstcont firstcont1'>
    <div className='insidecont insidecont1'>
        <div className='deepcont deepcont1'>
            <div className='deepercont deepercont1'>

<h2>Sign In</h2>

<div className='deepest2cont'>
    <div className='deepest3cont deepest3cont1'>
    
        <div className='idiv2' >
        <input type="email" className='deepest4cont deepest4cont1' value={userrr}  name="email" placeholder='    Email' onChange={handleChang}></input>
        </div>
    </div>
    <form onSubmit={handleClick}>
  <div>
    <input type="password" className='deepest4cont deepest4cont1' placeholder='    Password' name="password" onChange={handleChange}></input>
</div>
<div className="deepest5cont deepest5cont1">
{inpass === true ? <a href="#">&nbsp;Incorrect Email or Password</a> :""}
</div>
<div className='next next1'>

<button>Sign In</button>

</div>
</form>
<div className='deepestcont deepestcont1'>
    <span><br /><br /><br />New to Netflix? <a href="/">Sign up now.</a></span>
</div>
<div className='deepestcont deepestcont12'>
    <span><br /><br /><br/>This page is protected by Google reCAPTCHA to ensure you're not a bot.{learn===true ? <a  target="_blank" href="https://www.linkedin.com/in/aman-agrawal-269233252" rel="noreferrer"><br />This site is made by Aman Agrawal.Visit his linkedin by clicking here.</a> :<a href="#" onClick={handle}>Learn more.</a>} </span>
</div>
</div>

        </div>
        </div>
        </div>
</div>
<div className='footertwo footertwo1'>
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
    <button className='btn111'> <Globe size={21}/>&nbsp;&nbsp;English</button>
</div>
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />

</div>)}

export default Loginpage2;
