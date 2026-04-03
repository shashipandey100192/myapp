import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/customcss/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './applications/modules/users/userauth/UserLogin';
import Apperror from './applications/sharecomponents/Apperror';
import Masterpage from './applications/modules/dashboard/Masterpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<UserLogin/>}></Route>
              <Route path='dashboard' element={<Masterpage/>}></Route>

            <Route path='*' element={<Apperror/>}></Route>


        </Routes>
    
    
    </BrowserRouter>


  </React.StrictMode> 
);


