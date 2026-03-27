import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./output.css";
import "./style.css";
import Myabout,{Mypage, Page3} from './About';
import Mybootstrap from './Mybootstrap';
import Page from './Page';
import Mypage20 from './Mypage';
import Lifeprocess,{Backchange} from './Lifeprocess';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './Errorpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Lifeprocess></Lifeprocess>
    <Backchange></Backchange>
    <Myabout></Myabout>
    <Mypage></Mypage>
    <Page3></Page3>
    <Mybootstrap/>
    <Page></Page>
    <Mypage20/> */}
    
  <BrowserRouter>
      <Routes>
        <Route path='' element={<Lifeprocess/>}></Route>
        <Route path='about' element={<Mybootstrap/>}/>
        <Route path='*' element={<Errorpage/>}></Route>

      </Routes>
  
  
  </BrowserRouter>


  </React.StrictMode> 
);


