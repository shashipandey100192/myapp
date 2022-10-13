import React, { useState } from "react";
import Myabout from "./About";
import Mycontact from "./Contact";
import { Route,Routes } from 'react-router-dom';


function Myhome()
{


const [fs,ufs]=useState('yellow');
    return(
        <>
           
            <Routes>
                <Route path="/" element={<Myabout />} />
                <Route path="/contact" element={<Mycontact />} />
            </Routes>
        <h1 style={{color:`${fs}`,backgroundColor:'blue',fontSize:'50px'}}>heading</h1>
            <img src="image/img2.jpg" alt="ducat"/>
            <img src="img4.jpg" alt="ducat"/>
            <Myabout location="Delhi">
                <h1>welcome to react</h1>
            </Myabout>
            <Myabout location="Noida">
            <p>welcome to react</p>
            <button className="btn">submit</button>
            </Myabout>
        </>
    )
}

export default Myhome