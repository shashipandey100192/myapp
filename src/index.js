import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myabout,{Mypage, Page3} from './About';
import Mybootstrap from './Mybootstrap';
import Page from './Page';
import Mypage20 from './Mypage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myabout></Myabout>
    <Mypage></Mypage>
    <Page3></Page3>
    <Mybootstrap/>
    <Page></Page>
    <Mypage20/>
  </React.StrictMode> 
);


