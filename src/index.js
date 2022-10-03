
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import React, { Suspense  } from 'react';
import './components/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Myerror from './components/Error';
const Mycontact = React.lazy(() => import('./components/Contact'));
const Mylogin = React.lazy( ()=> import('./components/Login'));
const Myladingpage = React.lazy( ()=> import('./components/Landing'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mylogin />} />
        <Route path='/dashboard' element={
          <Suspense fallback={<div className='myfallback'>Loging...</div>}>
            <Myladingpage />
          </Suspense>
        } />
        <Route path='*' element={<Myerror/>} />
          
      </Routes>



    
    </BrowserRouter>
   
  </React.StrictMode>
);
