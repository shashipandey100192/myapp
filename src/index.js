import React,{lazy,Suspense} from 'react';
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
// import Productpage from './applications/modules/dashboard/Productpage';

import Productdetailspage from './applications/modules/dashboard/Productdetailspage';
import Mygraphpage from './applications/modules/dashboard/Mygraphpage';
import Paginationpage from './applications/modules/dashboard/Paginationpage';
import { Provider } from 'react-redux';
import { Mystorage } from './applications/redux/Mystore';
import Reduxpage from './applications/redux/Reduxpage';
const Productpage = lazy(()=>import('./applications/modules/dashboard/Productpage'));
// import Lazypage from './applications/modules/dashboard/Lazypage';
const Lazypage = lazy(()=>import('./applications/modules/dashboard/Lazypage'));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={Mystorage}>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<UserLogin/>}></Route>
              <Route path='dashboard' element={<Masterpage/>}>
                <Route path='' element={<Landingpage/>}></Route>
                <Route path='employeepage' element={<UserDashboard/>}></Route>
                <Route path='' element={<Landingpage/>}></Route>
                <Route path='productlist' element={
                  <Suspense fallback={<h1 className='myloading'>loading... </h1>}>
                    <Productpage/>
                  </Suspense>
                }></Route>
                <Route path='productlist/userpage/:id' element={<Productdetailspage/>}></Route>
                <Route path='lazypage' element={
                  <Suspense fallback={<h1 className='myloading'>loading... </h1>}>
                    <Lazypage/>
                </Suspense>}></Route>
                <Route path='graphpage' element={<Mygraphpage/>}></Route>
                <Route path='pagination' element={<Paginationpage/>}></Route>
                <Route path='redux' element={<Reduxpage/>}></Route>
                
              <Route path='*' element={<Apperror/>}></Route>
              </Route>
              <Route path='registor' element={<UserRegistor/>}></Route>
            <Route path='*' element={<Apperror/>}></Route>


        </Routes>
    
    
    </BrowserRouter>
    </Provider>


  </React.StrictMode> 
);


