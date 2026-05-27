import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apphomepage from './apps/Apphomepage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Apphomepage/>}/>

      </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>
);

