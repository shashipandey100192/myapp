
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import React, { lazy, Suspense  } from 'react';
import './components/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Myerror from './components/Error';

const Mylogin = React.lazy( ()=> import('./components/Login'));
const Myladingpage = React.lazy( ()=> import('./components/Landing'));
const Myhome = lazy( ()=>import('./components/Home'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mylogin />} />
        <Route path='/home' element={<Myhome />} />
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
