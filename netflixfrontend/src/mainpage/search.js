
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { Facebook ,Instagram ,Youtube ,Twitter } from 'lucide-react';

function Searchpage(){
    

   const [bgColor, setBgColor] = useState(' rgba(0,0,0,.0001)'); // Initial background color
   const scrollThreshold = 70; // Adjust this value as needed
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setBgColor('#141414'); // Change background color when scrolling past the threshold
      } else {
        setBgColor(' rgba(0,0,0,.0001)');// Reset background color
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
    return (
<div className='main'>
            <div className="bg" >
           
           <div className='boxer'> 
            <div className='navi' style={{ backgroundColor: bgColor }}>
      <img src="https://img.icons8.com/color/170/netflix.png"    alt="netflix"/>
      <ul>
        <li className='one'>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className='search'>
        <div className='sea' ><Search size={25} color="#ffffff" strokeWidth={2} /></div>
      <div className='children'><p>Children</p></div>
      <div className='sea' ><FontAwesomeIcon icon={faBell} size="xl" style={{color: "#ffffff",}} /></div>
      <a href="#"> <div className='child'><img src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="account" /></div>
      </a>
      </div> 
      </div> 
      <div className='cardsearch'>
        
      </div>
      
      
      
       </div>  </div>  </div> 

    )

}

export default Searchpage ;