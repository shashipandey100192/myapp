import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage from './About';
import Jsxpage from './Jsxpage';
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Jsxpage></Jsxpage>
   <Aboutpage></Aboutpage>
  </React.StrictMode>
);

