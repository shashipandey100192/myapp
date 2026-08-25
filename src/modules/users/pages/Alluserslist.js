import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { baseurl } from '../../../service/Urlpath';

function Alluserslist() {

    const [user,b]=useState([]);

    const alluserlist = ()=>{
        axios.get(`${baseurl}/userlist`).then((r)=>{
            console.log(r);
            b(r.data.userlist);
        })
    }


    useEffect(() => {
        alluserlist();
    }, []);

    const userdelete = (d)=>{
        console.log(d);
        axios.delete(`${baseurl}/userdelete/${d}`).then((p)=>{
            console.log(p);
            if(p.data.mycode===240)
            {
               toast.success(p.data.msg,{autoClose:1000});
               alluserlist();
            }
        })

    }

    return (
        <div className='container-fluid'>
            <ToastContainer></ToastContainer>
            <div className='row'>
                <div className='col-12'>
                    <table class="table">
                        
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">FullName</th>
                                <th scope="col">Role</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">salary</th>
                                <th scope="col">hra</th>
                                <th scope="col">extra</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((a) => {
                                return (
                                    <tr key={a._id}>
                                        <th scope="row">{a._id}</th>
                                        <td>{a.email}</td>
                                        <td>{a.fullname}</td>
                                        <td>{a.role}</td>
                                        <td>{a.dob}</td>
                                        <td>{a.mobile}</td>
                                        <td>{a.salary}</td>
                                        <td>{a.hra}</td>
                                        <td>{a.extra}</td>
                                        <td>
                                            <Link to={"details/"+a._id} class="badge text-bg-primary">View</Link>
                                            <Link to={"edit/"+a._id} class="badge text-bg-warning ms-2">Edit</Link>
                                            <button class="badge text-bg-danger ms-2" onClick={()=>{userdelete(a._id)}}>Del</button>
                                        </td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Alluserslist