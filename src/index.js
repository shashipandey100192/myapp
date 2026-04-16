import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/customcss/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './applications/modules/users/userauth/UserLogin';
import Apperror from './applications/sharecomponents/Apperror';
import Masterpage from './applications/modules/dashboard/Masterpage';
import UserRegistor from './applications/modules/users/userauth/UserRegistor';
import Landingpage from './applications/modules/dashboard/Landingpage';
import UserDashboard from './applications/modules/users/userdashboard/UserDashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<UserLogin/>}></Route>
              <Route path='dashboard' element={<Masterpage/>}>
                <Route path='' element={<Landingpage/>}></Route>
                <Route path='employeepage' element={<UserDashboard/>}></Route>
                <Route path='' element={<Landingpage/>}></Route>
                
              <Route path='*' element={<Apperror/>}></Route>
              </Route>
              <Route path='registor' element={<UserRegistor/>}></Route>
            <Route path='*' element={<Apperror/>}></Route>


        </Routes>
    
    
    </BrowserRouter>


  </React.StrictMode> 
);


