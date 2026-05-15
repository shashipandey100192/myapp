import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { Aboutpage, Contactus, Service } from './pages/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Abc></Abc>
    <Aboutpage></Aboutpage>
    <Contactus />
    <Service />
  </React.StrictMode>
);

