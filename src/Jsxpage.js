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
    </Fragment>

  )
}

export default Jsxpage