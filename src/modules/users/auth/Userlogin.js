import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

function Userlogin() {
const getlocal = localStorage.getItem('myuser');
const abc = useNavigate();

const [email,updateemail]= useState("");
const [pass,updatepass]= useState("");


const myemail = (e)=>{
    updateemail(e.target.value);
}

const mypass = (p)=>{
    updatepass(p.target.value);
}


const loginValidation = ()=>{

    if(email==="")
    {
        toast.warn("email is required");
    }
    if(pass==="")
    {
        toast.warn("password is required");
    }

    if(email==="admin@gmail.com" && pass==="admin")
    {
        toast.success("login successfully");
       setTimeout(()=>{
        abc('landing');
       },1000)

    }
    else
    {
        return false
    }

}


    return (

        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-3 border p-3 bg-light shadow'>
                    <div className='container-fluid '>
                        <div className='row '>
                            <div className='col-12 text-center'>
                                <p className='h5 mb-5'>Login page : {getlocal}</p>
                                <ToastContainer autoClose="1000" position='top-left' theme='dark'/>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control"  value={email} onInput={myemail}/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">password</label>
                                    <input type="password" class="form-control" value={pass} onInput={mypass}/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-outline-success" value="login" onClick={loginValidation}/>
                                    <Link to="registor">New user</Link>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Userlogin