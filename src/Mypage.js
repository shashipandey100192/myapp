import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Mypage20() {

    const a = "kumar";
    const name = "mohan";
    const age = 80;
    const working = true;
    const [first, second] = useState("this is textooooooooooooooo");
    const [x,y]=useState({
        name:"kumar",
        age:60,
        phone:"874521545",
        working:true
    })

    const third = ()=>{
        second("change the value of default state");
    }

  return (
    <div className='border bg-info p-5'>Mypage {a}
        <input type="text" value={name}/>
        <h1>{first}</h1>
        <input type='button' value="run func" onClick={third}/>
        <h3>user  name : {x.name}</h3>
        <h3>user  age : {x.age>=40? "old":"new"}</h3>
        <Link to="/">Home page</Link>

    </div>
  )
}

export default Mypage20