import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { baseurl } from '../../../service/Urlpath';

function Userlogin() {

const abc = useNavigate();

 const [login,updatelogin]=useState({
    email:"rrr",
    pass:"tt"
   }) 

const fieldupdate = (f)=>{
    updatelogin({
        ...login,
        [f.target.name]: f.target.value
    })
}


const loginfunc = async ()=>{
    axios.post(`${baseurl}/userlogin`,login).then((r)=>{
        console.log(r);
        if(r.data.mycode===420)
        {
            toast.warning(r.data.msg,{autoClose:500,theme:'dark'});
        }

        if(r.data.mycode===520)
        {
            toast.warning(r.data.msg,{autoClose:700,theme:'dark'});
        }
        

        if(r.data.mycode===620)
        {
            toast.success(r.data.msg,{autoClose:700,theme:'dark'});
            setTimeout(()=>{
                abc('landing');
                console.log("sdfjhdf")
            },700);
           
            
        }
       
       
    })

}





    return (

        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-3 border p-3 bg-light shadow'>
                    <div className='container-fluid '>
                        <div className='row '>
                            <div className='col-12 text-center'>
                                <p className='h5 mb-5'>Login page</p>
                                <ToastContainer/>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control"  value={login.email} onInput={fieldupdate} name='email'/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">password</label>
                                    <input type="password" class="form-control" value={login.pass}  onInput={fieldupdate} name='pass'/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-outline-success" value="login" onClick={loginfunc}/>
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