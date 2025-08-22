import React from 'react'
import { Fragment } from 'react'

function Jsxpage() {

const name="kumar singh";
const age = 10;


  return (
    <Fragment>  
    <div>Jsxpage</div>
    <div>this is div {name}</div>
    <h2>user age is:{age} and username is: {name}</h2>
    <div>{<span>user</span>}</div>
    <h1>{age>=30? "over age":"under age"}</h1>
    <h1>{age>=50? "yes over": age>=30? "under age" : "nothing"}</h1>
    <h2 style={{color:"red",fontSize:80}}>use of css</h2>
    <div className='first'>this is external css link</div>
    <h2>Git is a free and open-source distributed version control system (DVCS) designed to handle projects of all sizes with speed and efficiency. It was created by Linus Torvalds in 2005 for the development of the Linux kernel. Git is a free and open-source distributed version control system (DVCS) designed to handle projects of all sizes with speed and efficiency. It was created by Linus Torvalds in 2005 for the development of the Linux kernel. </h2>
    </Fragment>

  )
}

export default Jsxpage