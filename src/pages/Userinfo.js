import React from "react";
import Myabout, { Service } from "./About";

function Userinfopage()
{
const uname = "kumar";
const course=["web","excel","react","angular"];
const user={username:"ravi",age:40,height:"50ft",weight:"5ton"};
const mycours=7000;
const myele = <h3>this is heading three</h3>

    return(
        <div>
        <h1>user Name: {uname}</h1>
        <h1>user age {50}</h1>
        <h1>user phone : {"878787878"}</h1>
        <h1>user email</h1>
        <h1>user course: {course[0]}</h1>
        <h1>user info: {user.age}</h1>
        <h1>fees: {500+900+500+800}</h1>
        <h1>dis: {50<90}</h1> 
        <h1>dis: {mycours>8000? "yes":"no"}</h1> 
         <h1>dis: {mycours>8000? "yes":mycours>5000? mycours*10/100 : 0}</h1> 
         <h1>my element : {myele}</h1>
         <div>element using condition : {mycours>5000? <Myabout/> : <Service/>}</div>
        </div>
    )
}
export default Userinfopage