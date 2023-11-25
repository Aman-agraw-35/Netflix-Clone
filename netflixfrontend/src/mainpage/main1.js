import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import { Info } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { Facebook ,Instagram ,Youtube ,Twitter } from 'lucide-react';
import video from './video/bgvid.mp4'
import Card from './Card';

function Main1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeInde, setActiveInde] = useState(0);
  const [activeInd, setActiveInd] = useState(0);
  const [activeIn, setActiveIn] = useState(0);
  const [activeI, setActiveI] = useState(0);
  const [active, setActive] = useState(0);
  const [imager, setImager] = useState([]);
  const [image, setImage] = useState([]);
  const [tv, setTv] = useState([]);
  const [t, setT] = useState([]);
  const [indiantv, setindianTv] = useState([]);
  const [indiant, setindianT] = useState([]);
  const [holly , setHolly ] = useState([]);
  const [holl , setHoll ] = useState([]);
  const [ com , setCom ] = useState([]);
  const [ co , setCo] = useState([]);
  const [ tre , settre ] = useState([]);
  const [ tr , settr ] = useState([]);
  const [search ,setSearch] = useState([]);
  const [searc ,setSearc] = useState([]);
  const [click ,setClick]=useState(true);
  const [query ,setquery]=useState('');
  const apiKey = 'dce53055e56567cf253f01b3a50fad4b';
  const baseUrl = 'https://api.themoviedb.org/3';
  const imgfirst = 'https://image.tmdb.org/t/p/w500';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then((response) => {
  const popularMovies = response.data.results;
    setImager(popularMovies);
    
  })
  .catch((error) => {
    console.error('Error fetching data from TMDb:', error);
  });
  axios.get(`${baseUrl}/movie/popular?page=3&api_key=${apiKey}`)
  .then((response) => {
  const popularMovies = response.data.results;
    setImage(popularMovies);
    
  })
  .catch((error) => {
    console.error('Error fetching data from TMDb:', error);
  });
  
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`)
.then((response) => {
const popularMovies = response.data.results;
  setTv(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
axios.get(`${baseUrl}/tv/popular?page=2&api_key=${apiKey}`)
.then((response) => {
const popularMovies = response.data.results;
  setT(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`${baseUrl}/discover/tv?page=2&api_key=dce53055e56567cf253f01b3a50fad4b&with_original_language=hi`)
.then((response) => {
const popularMovies = response.data.results;
  setindianTv(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
axios.get(`${baseUrl}/discover/tv?page=1&api_key=dce53055e56567cf253f01b3a50fad4b&with_original_language=hi`)
.then((response) => {
const popularMovies = response.data.results;
  setindianT(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`${baseUrl}/discover/movie?api_key=dce53055e56567cf253f01b3a50fad4b&sort_by=popularity.desc&with_origin_country=US&page=2`)
.then((response) => {
const popularMovies = response.data.results;
  setHolly(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
axios.get(`${baseUrl}/discover/movie?api_key=dce53055e56567cf253f01b3a50fad4b&sort_by=popularity.desc&with_origin_country=US&page=3`)
.then((response) => {
const popularMovies = response.data.results;
  setHoll(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`${baseUrl}/discover/movie?api_key=dce53055e56567cf253f01b3a50fad4b&sort_by=popularity.desc&with_origin_country=US&page=5`)
.then((response) => {
const popularMovies = response.data.results;
  settre(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
axios.get(`${baseUrl}/discover/movie?api_key=dce53055e56567cf253f01b3a50fad4b&sort_by=popularity.desc&with_origin_country=US&page=4`)
.then((response) => {
const popularMovies = response.data.results;
  settr(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
axios.get(`${baseUrl}/discover/movie?include_adult=true&include_video=true&sort_by=popularity.desc&with_genres=35&with_origin_country=IN&api_key=dce53055e56567cf253f01b3a50fad4b`)
.then((response) => {
const popularMovies = response.data.results;
  setCom(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
axios.get(`${baseUrl}/discover/movie?page=2&include_adult=true&include_video=true&sort_by=popularity.desc&with_genres=35&with_origin_country=IN&api_key=dce53055e56567cf253f01b3a50fad4b`)
.then((response) => {
const popularMovies = response.data.results;
  setCo(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=dce53055e56567cf253f01b3a50fad4b`)
.then((response) => {
const popularMovies = response.data.results;
  setSearch(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});

axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=dce53055e56567cf253f01b3a50fad4b`)
.then((response) => {
const popularMovies = response.data.results;
  setSearc(popularMovies);
})
.catch((error) => {
  console.error('Error fetching data from TMDb:', error);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      
       if(prevIndex === 0){
        return 3 ;
       }
       else{
        return prevIndex - 1;
       }
      
      
      
    });
  };

  const handleNextClick = () => {
   
    setActiveIndex((prevIndex) => {
       if(prevIndex === 3){
      return 0 ;
     }
     else{
      return prevIndex + 1;
     }
    });
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handlePrevClic = () => {
    setActiveInde((prevIndex) => {
      
      if(prevIndex === 0){
       return 3 ;
      }
      else{
       return prevIndex - 1;
      }
     
     
     
   });
  };

  const handleNextClic = () => {
    setActiveInde((prevIndex) => {
      if(prevIndex === 3){
     return 0 ;
    }
    else{
     return prevIndex + 1;
    }
   });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handlePrevCli = () => {
    setActiveInd((prevIndex) => {
      
      if(prevIndex === 0){
       return 3 ;
      }
      else{
       return prevIndex - 1;
      }
     
     
     
   });
  };

  const handleNextCli = () => {
    setActiveInd((prevIndex) => {
      if(prevIndex === 3){
     return 0 ;
    }
    else{
     return prevIndex + 1;
    }
   });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handlePrevCl = () => {
    setActiveIn((prevIndex) => {
      
      if(prevIndex === 0){
       return 3 ;
      }
      else{
       return prevIndex - 1;
      }
     
     
     
   });
  };

  const handleNextCl = () => {
    setActiveIn((prevIndex) => {
      if(prevIndex === 3){
     return 0 ;
    }
    else{
     return prevIndex + 1;
    }
   });
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handlePrevC = () => {
    setActiveI((prevIndex) => {
      
      if(prevIndex === 0){
       return 3 ;
      }
      else{
       return prevIndex - 1;
      }
     
     
     
   });
  };

  const handleNextC = () => {
    setActiveI((prevIndex) => {
      if(prevIndex === 3){
     return 0 ;
    }
    else{
     return prevIndex + 1;
    }
   });
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handlePrev = () => {
    setActive((prevIndex) => {
      
      if(prevIndex === 0){
       return 3 ;
      }
      else{
       return prevIndex - 1;
      }
     
     
     
   });
  };

  const handleNext = () => {
    setActive((prevIndex) => {
      if(prevIndex === 3){
     return 0 ;
    }
    else{
     return prevIndex + 1;
    }
   });
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const [condition ,setCondition ] = useState(0);
   const clicked = () => {
      setCondition(1);
   };

   const [bgColor, setBgColor] = useState(' rgba(0,0,0,.0001)');
   const scrollThreshold = 70; 
 
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > scrollThreshold) {
         setBgColor('#141414'); 
       } else {
         setBgColor(' rgba(0,0,0,.0001)');
       }
     };
 
     window.addEventListener('scroll', handleScroll);
 
  
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  function handleSearch(event){
    setquery(event.target.value)
    
  }
  
  function handlethis(){
   setClick((ee => {
     return(ee===true? false : true  );
   }
  ))
  if(click===true){
    setquery('');
   }}

   const genre = [{"id":28,"name":"Action"}, {"id":12,"name":"Adventure"}, {"id":16,"name":"Animation"}, {"id":35,"name":"Comedy"}, {"id":80,"name":"Crime"}, {"id":99,"name":"Documentary"}, {"id":18,"name":"Drama"}, {"id":10751,"name":"Family"}, {"id":14,"name":"Fantasy"}, {"id":36,"name":"History"}, {"id":27,"name":"Horror"}, {"id":10402,"name":"Music"}, {"id":9648,"name":"Mystery"}, {"id":10749,"name":"Romance"}, {"id":878,"name":"Science Fiction"}, {"id":10770,"name":"TV Movie"}, {"id":53,"name":"Thriller"}, {"id":10752,"name":"War"}, {"id":37,"name":"Western"}]
    return(
        <div className='main'>
            <div className="bg" >
       {click===true? <video src={video}   playsInline muted autoPlay loop poster="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdjsswXqVYAryAHbGcIfIX67XwjNjgvFLbB4M_KcAY7Wb-xxPrxzlx20uN-DfPvCRlQm8s6OOSjjP0lCvmfm8_l9zkCiuY8WnYpQohp2X5xISSJ2rrKo0VxLfkjl6ZGOo-h5.jpg?r=f9b"  type="video/mp4"  /> : " "}
           
           <div className='boxer'> 
            <div className='navi' style={{ backgroundColor: bgColor }}>
      <img src="https://img.icons8.com/color/170/netflix.png"    alt="netflix"/>
      <ul>
        <li className='one'><a href="/browse">Home</a></li>
        <li  className='od'><a href="/browse">TV Shows</a></li>
        <li className='od' >  <a href="/browse">Movies</a></li>
        <li className='od' >  <a href="/browse">New & Popular</a></li>
        <li className='od'>  <a href="/browse">My List</a></li>
        <li className='od' > <a href="/browse">Browse by Languages</a></li>
      </ul>
      <div className='search'>
        <div className='sea'  >{ click===true ? <Search size={25} onClick={handlethis} color="#ffffff" strokeWidth={2} />:
        <div className='flexme'> <Search size={25} onClick={handlethis} color="#ffffff" strokeWidth={2} /> <input type='text' onChange={handleSearch} placeholder="Movies, TV and More" value={query} ></input></div> }</div>
      <div className='children'><p><a style={ {textDecoration: 'none' ,color:'white',paddingTop :"6px"}} href="" onClick={(hand => (alert('No children registered.')))}>Children</a></p></div>
      <div className='sea'  onClick={(ha => (alert('No new notifications.')))} ><FontAwesomeIcon icon={faBell} size="xl" style={{color: "#ffffff",}} /></div>
      <a href="#"> <div  onClick={(han => (alert('Only one profile detected.')))} className='child'><img  src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="account" /></div>
      </a>
      </div>
            </div>
            {click===true ? <> <div className='header'>
            <div   className="heading">
            <img src="https://pngimg.com/d/squid_game_PNG37.png" alt="Squid Games" />
            </div>
 <div className='infor'>
 <p>Hoping to win easy money, a desperate Gi-hun <br /> agrees to take part in an enigmatic game</p>
 </div>
 <div className='informat'>
<button className='bt1' onClick={(hand => (alert('The API IN THIS WEBSITE DO NOT HAVE VIDEOS .')))} ><FontAwesomeIcon icon={faPlay} size="xl" style={{color: "#000000"}  } />&nbsp;&nbsp;Play</button>
<button className='bt2'  onClick={(hand => (alert('No more info available.')))}  ><Info size={30} />&nbsp;&nbsp;More Info</button>
 </div>
 </div>

 <div className='topsearches'>
  <h2 className='h2h'>Top Searches</h2>
  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {imager.slice(0,7).map( datas => { 
     return (<Card
   url={imgfirst + datas.backdrop_path}
   name={datas.title}
   key={datas.id}
   date={datas.release_date}
   genre = {genre.forEach(element => {
    if(element.id === datas.genre){
      return element.name+" " ;
    }else{
      return "";
    }
   })
  
  
  }
  rating= {datas.vote_average}
   />)
    })}

   </div>
 </div>

 <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {imager.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {image.slice(0,7).map( datas => { 
     return (<Card
   url={imgfirst + datas.backdrop_path}
   name={datas.title}
   key={datas.id}
   date={datas.release_date}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {image.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrevClick}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>


 </div> 
 

 <div className='topsearches2'>
  <h2 className='h2h' >Top US TV Shows</h2>

  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${activeInde === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {tv.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.name}
   date={datas.first_air_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>

 <div className={`carousel-item ${activeInde === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {tv.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   date={datas.first_air_date}
   name={datas.name}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${activeInde === 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {t.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   date={datas.first_air_date}
   name={datas.name}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${activeInde === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {t.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   date={datas.first_air_date}
   name={datas.name}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrevClic}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNextClic}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>


 </div>


 <div className='topsearches2'>
  <h2 className='h2h' >New Releases</h2>

  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${activeInd === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {tre.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   key={datas.id}
   date={datas.release_date}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>

 <div className={`carousel-item ${activeInd === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {tre.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   key={datas.id}
   date={datas.release_date}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${activeInd=== 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {tr.slice(0,7).map( datas => { 
     return (<Card 
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${activeInd === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {tr.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrevCli}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNextCli}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>

 </div>


 <div className='topsearches2'>
  <h2 className='h2h' >Comedy Movies</h2>
  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${activeIn === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {com.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>

 <div className={`carousel-item ${activeIn === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {com.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   date={datas.release_date}
   name={datas.title}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${activeIn === 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {co.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   date={datas.release_date}
   name={datas.title}
   rating= {datas.vote_average}
   key={datas.id}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${activeIn === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {co.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrevCl}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNextCl}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>

 </div>


 <div className='topsearches2'>
  <h2 className='h2h' >Indian TV Shows</h2>
  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${activeI === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {indiantv.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
      name={datas.name}
   date={datas.first_air_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>

 <div className={`carousel-item ${activeI === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {indiantv.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}  
        name={datas.name}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${activeI === 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {indiant.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
      name={datas.name}
   date={datas.first_air_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${activeI === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {indiant.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
      name={datas.name}
   date={datas.first_air_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrevC}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNextC}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>

 </div>


 <div className='topsearches2'>
  <h2 className='h2h' >Hollywood Movies</h2>
  <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="false">
  <div className="carousel-inner">
    <div className={`carousel-item ${active === 0 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {holly.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>

 <div className={`carousel-item ${active === 1 ? 'active' : ''}`}>
 <div className='titles carousel-content'>
 {holly.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
    </div>
    <div className={`carousel-item ${active === 2 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {holl.slice(0,7).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 <div className={`carousel-item ${active === 3 ? 'active' : ''}`}>
  <div className='titles carousel-content'>
  {holl.slice(8,15).map( datas => { 
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)
    })}
   </div>
 </div>
 </div>
 <a  className="carousel-control-prev" role="button" onClick={handlePrev}> 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a  className="carousel-control-next" role="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
 </div>

 </div> </>  : <div className='area'>
    <h1>SEARCH AND WATCH YOUR FAVOURITE CONTENT ON NETFLIX</h1>
            {search.map( datas => { 
              if(datas.backdrop_path !== null){
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.title}
   date={datas.release_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)}
    })}
    {searc.map( datas => { 
              if(datas.backdrop_path !== null){
     return (<Card
      url={imgfirst + datas.backdrop_path}
   name={datas.name}
   date={datas.first_air_date}
   key={datas.id}
   rating= {datas.vote_average}
   />)}
    })}

  </div>  }

 <div className='ending'>
  <div className='tophead'>
   <a target="_blank" href="https://www.facebook.com/NetflixIN" rel="noreferrer"><Facebook size={25} color="#ffffff" strokeWidth={3} /> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a target="_blank" href="https://www.instagram.com/Netflix_IN/" rel="noreferrer"><Instagram size={25} color="#ffffff" strokeWidth={3} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a target="_blank" href="https://twitter.com/netflixindia" rel="noreferrer"><Twitter size={25} color="#ffffff" strokeWidth={3} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a target="_blank" href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" rel="noreferrer"><Youtube size={25} color="#ffffff" strokeWidth={3} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div className='foot'>
  <ul>
    <li><a href="#">Audio Description</a></li>
    <li><a href="#">Help Centre</a></li>
    <li><a href="#">Gift Cards</a></li>
    <li><a href="#">Media Centre</a></li>
    <li><a href="#">Investor Relations</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Terms of Use</a></li>
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Legal Notices</a></li>
    <li><a href="#">Cookie Preferences</a></li>
    <li><a href="#">Corporate Information</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
 </div>
 <button onClick={clicked}>{condition=== 1 ? "843-456" : "Service Code" }</button>
 <span><br />© 2023 Aman Agrawal IIIT BHOPAL</span>
 </div>
 </div>
             </div>
        </div>
        )
    }  
    export default Main1 ;