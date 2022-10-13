import React from "react";
import './style.css';

function Myabout(props)
{
    return(
        <>
            <h1>this is about page <span className="abc">{props.location}</span></h1>
            {props.children}
        </>
    )
}
export default Myabout