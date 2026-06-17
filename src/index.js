import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/global.css";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Apphomepage from './apps/Apphomepage';
import Errorpage from './modules/shares/Errorpage';
import Userlogin from './modules/users/auth/Userlogin';
import Userblankpage from './modules/users/layouts/Userblankpage';
import Userregistor from './modules/users/auth/Userregistor';
import Fullpage from './modules/users/layouts/Fullpage';
import Userlandingpage from './modules/users/pages/Userlandingpage';
import Alluserslist from './modules/users/pages/Alluserslist';
import Userdetails from './modules/users/pages/Userdetails';
import Charts from './modules/users/pages/Charts';
import { Provider } from 'react-redux';
import { datastore } from './modules/reduxpage/Mystore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={datastore}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Apphomepage/>}/>

        <Route path='users' element={<Userblankpage/>}>
            <Route path='' element={<Userlogin/>}></Route>
            <Route path='registor' element={<Userregistor/>}></Route>
            <Route path='landing' element={<Fullpage/>}>
              <Route path='' element={<Userlandingpage/>}></Route>
              <Route path='userlist' element={<Alluserslist/>}/>
              <Route path='userlist/edit/:id' element={<Userdetails/>}/>
              <Route path='chartpage' element={<Charts/>}/>
            
            
            
            </Route>
        </Route>

        <Route path='*' element={<Errorpage/>}></Route>

      </Routes>
    
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

