import React, { Suspense,lazy } from 'react';
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
import Reduxpage from './modules/reduxpage/Reduxpage';  
import Abcd from './modules/users/pages/Mediapage.tsx';
import Muipage from './modules/users/pages/Muipage.js';
import Useredit from './modules/users/pages/Useredit.js';
// import Lazypage from './modules/users/pages/Lazypage';
const Lazypage = lazy(()=>import("./modules/users/pages/Lazypage"));



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
              <Route path='userlist/details/:id' element={<Userdetails/>}/>
              <Route path='userlist/edit/:id' element={<Useredit/>}/>
              <Route path='chartpage' element={<Charts/>}/>
              <Route path='reduxpage' element={<Reduxpage/>}></Route>
              <Route path='lazypage' element={<Suspense fallback={<h1 className='loeading'>my content is loading...</h1>}>
                <Lazypage/>
              </Suspense>}>
              </Route>
              <Route path='mediapage' element={<Abcd/>}></Route>
              <Route path='mui' element={<Muipage/>}></Route>
            <Route path='*' element={<Errorpage/>}></Route>

            </Route>
        </Route>

        <Route path='*' element={<Errorpage/>}></Route>

      </Routes>
    
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

