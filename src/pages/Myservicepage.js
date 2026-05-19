import React, { Fragment, useState } from 'react'

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




  return (
    <Fragment>
    <div>Myservicepagepppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp {a? "ok":"cancel"}</div>
    <h3>user age: {x.age}</h3>
    <h3>user name {x.name}</h3>
    <h3>gender {x.gender}</h3>
    <button type='button' onClick={mycontrol}>click to update state variable</button>
    <input type='text' value={statevariable}  onInput={changeinputvaluue}/>
    </Fragment>
  
  
  )
}

export default Myservicepage