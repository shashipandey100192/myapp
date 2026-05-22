import React from 'react';
import ReactDOM from 'react-dom/client';
import "./output.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Abc, { Aboutpage, Contactus, Service } from './pages/About';
import "./pages/global.css";
import Myservicepage from './pages/Myservicepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userinfopage from './pages/Userinfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Myservicepage/>}></Route>
            <Route path='about' element={<Aboutpage/>}></Route>
            <Route path='webpage' element={<Userinfopage/>}></Route>
            
            <Route path='*' element={<h1>error page display</h1>}></Route>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

