import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Lifeprocess() {
    const [one, two] = useState(true)
    const [sv, sf] = useState("default value");

    const changedata = (p) => {
        console.log(p.target.value);
        sf(p.target.value);
        if (p.target.value === "today") {
            two(false)
        }
        else {
            two(true)
        }

    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-5 bg-danger'>
                    <input type='text' value={sv} onInput={changedata} />
                    <input type='button' value="submit" disabled={one} />
                    <input type='checkbox' checked={one} />
                    <input type='radio' checked={one} />
                    <Link to="service">service page</Link>
                </div>
            </div>
        </div>
    )
}

export default Lifeprocess


export function Backchange() {
    const [fg, fgupdate] = useState("orange");
    const [dp, updatedp]=useState("block");
    const [ch,updch]=useState(false)

    const mybgupdate = (e) => {
        fgupdate(e.target.value)
    }



    const updateradio = (e)=>{
        console.log(e);
    //    if(e.target.checked===true)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-5' style={{ backgroundColor: fg }}>
                    <input type="color" onInput={mybgupdate} />
                    <input type='radio' onInput={updateradio} name='abc'/>
                    <div className='border bg-success' style={{display:dp}} >
                        <h1>heading one</h1>
                        <p>this is text</p>
                    </div>
                </div>
            </div>
        </div>


    )
}