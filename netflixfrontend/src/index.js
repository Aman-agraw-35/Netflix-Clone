import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './startingpage/App';
import App2 from './loginpage/App_2';
import App3 from './mainpage/App_3';
import Loginpage2 from './loginpage/loginpage2';
import './startingpage/frontpages.css';
import './loginpage/loginpage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './mainpage/mainpage.css';
import {BrowserRouter,Routes,Route}from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
     <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/signup' element={<App2/>}/>
    <Route path='/browse' element={<App3/>} />
    <Route path='/login' element={<Loginpage2/>}/>
    </Routes>
    </BrowserRouter>
      </div>


);


