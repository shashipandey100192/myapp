import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {changeage } from '../../reduxpage/Myactions';

function Userdetails() {
     const myage = useSelector((state) => state.counter.age);
    const abc = useDispatch();



const {id} = useParams();
const [user,updateuser]=useState({})

const singleuser = ()=>{
        axios.get(`http://localhost:7500/emp/${id}`).then((r)=>{
            console.log(r);
            updateuser(r.data);
           
        })
    }

 useEffect(() => {
        singleuser();
    }, []);



  return (
    <div className='container-fluid'>

        <div className='row'>
            <div className='col-12'>
                <h1>name: {myage}</h1>

                 <button onClick={() => abc(changeage())}>chang</button>

            </div>
            <div className='col-md-2'> image </div>
            <div className='col-md-10'>
                <h3>id: {user.id}</h3>
                <h3>Username: {user.fullname}</h3>
                <h3>DOB: {user.dob}</h3>
                <h3>Mobile No: {user.mobile}</h3>
                <h3>Email Id: {user.email}</h3>
            </div>
        </div>
    </div>
  )
}

export default Userdetails