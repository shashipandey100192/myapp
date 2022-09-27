import React from "react";
import Myabout from "./About";
import Mycontact from "./Contact";
import { Route,Routes } from 'react-router-dom';

function Myhome()
{
    return(
        <>
           
            <Routes>
                <Route path="/" element={<Myabout />} />
                <Route path="/contact" element={<Mycontact />} />
            </Routes>

        </>
    )
}

export default Myhome