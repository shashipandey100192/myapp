import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeage, changename, details } from './Myactions.js';
import axios from 'axios';





function Reduxpage() {

    const xyz = useSelector((state) => state.counter.age);
    const myaddress = useSelector((state) => state.counter.addaress);
    const funsend = useDispatch();
    const [card, updatecard] = useState([]);

    const myapi = () => {
        axios.get("https://dummyjson.com/products?limit=10").then((d) => {
            console.log(d.data.products);
      
            updatecard(d.data.products);
        })
    }

    useEffect(() => {
        myapi();
    }, []);



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h1>this is redux page</h1>
                    <h1>{xyz}</h1>
                    <div className='border p-3'> {myaddress}</div>
                    <input type='button' value="change age" onClick={() => funsend(changeage())} />
                    <input type='button' value="print address" onClick={() => funsend(details())} />
                </div>
            </div>
            <div className='row'>

                {card.map((c) => {
                    return (
                        <div className='col-md-3'>
                                <div className='card p-2 bg-danger text-white'>

                                    <input type='button' value="change age" onClick={() => funsend(changeage())} />
                                </div>

                        </div>
                    )

                })}

            </div>

        </div>
    )
}

export default Reduxpage