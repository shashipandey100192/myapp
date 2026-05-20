import React, { Fragment, useEffect, useState } from 'react'

function Myservicepage() {


let [a,b]= useState(false);
let [x,y]=useState({name:"kumar",age:40,gender:"male"});

let mycontrol = ()=>{
  b(true)
  y({name:"ravi singh",age:700,gender:"other"})
}

let [statevariable,statefunc]=useState("mohan");

 
let changeinputvaluue = (p)=>{
  console.log(p.target.value);
  statefunc(p.target.value);
    
}

const [btn, updatbtn]=useState('submit my func')
const [eh,uea]=useState('block');
const first = ()=>
{
  const a = prompt("enter button value");
  updatbtn(a);
  const c = prompt("enter btn actions");
  uea(c)
}



const [mystatus, updatestatus]=useState();

const myfunc = (p)=>{
  console.log(p.target.value);
  updatestatus(p.target.value);

}



  return (
    <Fragment>
    <div>Myservicepagepppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp {a? "ok":"cancel"}</div>
    <h3>user age: {x.age}</h3>
    <h3>user name {x.name}</h3>
    <h3>gender {x.gender}</h3>
    <button type='button' onClick={mycontrol}>click to update state variable</button>
    <input type='text' value={statevariable}  onInput={changeinputvaluue}/>
    <input type='button' value={btn} onClick={first}/>
    <h1 style={{color:btn,display:eh}}>this is my text sjdf hjksdh fjkshdfjhsjfhsjfhd</h1>
   

<table border="1" width="1200" >
  <tr>
    <td>code</td>
    <td>name</td>
    <td>age</td>
    <td>email</td>
    <td>phone</td>
    <td>actions</td>
  </tr>
  <tr  style={{backgroundColor:mystatus==="success"? "green" : mystatus==="pending"? "orange" : mystatus==="close"? "red" : ""}}>
    <td>01</td>
    <td>rohit</td>
    <td>80</td>
    <td>rohit@gmail.com</td>
    <td>545451541</td>
    <td>
       <select onChange={myfunc}>
      <option>success</option>
      <option>warning</option>
      <option>pending</option>
      <option>close</option>
    </select>

    </td>
  </tr>
  <tr  style={{backgroundColor:mystatus==="success"? "green" : mystatus==="pending"? "orange" : mystatus==="close"? "red" : ""}}>
    <td>01</td>
    <td>rohit</td>
    <td>80</td>
    <td>rohit@gmail.com</td>
    <td>545451541</td>
    <td>
       <select onChange={myfunc}>
      <option>success</option>
      <option>warning</option>
      <option>pending</option>
      <option>close</option>
    </select>

    </td>
  </tr>
  <tr  style={{backgroundColor:mystatus==="success"? "green" : mystatus==="pending"? "orange" : mystatus==="close"? "red" : ""}}>
    <td>01</td>
    <td>rohit</td>
    <td>80</td>
    <td>rohit@gmail.com</td>
    <td>545451541</td>
    <td>
       <select onChange={myfunc}>
      <option>success</option>
      <option>warning</option>
      <option>pending</option>
      <option>close</option>
    </select>

    </td>
  </tr>
<tr  style={{backgroundColor:mystatus==="success"? "green" : mystatus==="pending"? "orange" : mystatus==="close"? "red" : ""}}>
    <td>01</td>
    <td>rohit</td>
    <td>80</td>
    <td>rohit@gmail.com</td>
    <td>545451541</td>
    <td>
       <select onChange={myfunc}>
      <option>success</option>
      <option>warning</option>
      <option>pending</option>
      <option>close</option>
    </select>

    </td>
  </tr>
  <tr  style={{backgroundColor:mystatus==="success"? "green" : mystatus==="pending"? "orange" : mystatus==="close"? "red" : ""}}>
    <td>01</td>
    <td>rohit</td>
    <td>80</td>
    <td>rohit@gmail.com</td>
    <td>545451541</td>
    <td>
       <select onChange={myfunc}>
      <option>success</option>
      <option>warning</option>
      <option>pending</option>
      <option>close</option>
    </select>

    </td>
  </tr>


</table>
<div className='container'>
  <div className='row'>
    <div className='col'>
      <h1 className='bg-danger'>this is bootstrap heading</h1>
    </div>
  </div>
</div>


    </Fragment>
  
  
  )
}

export default Myservicepage