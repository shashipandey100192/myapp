import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Alluserslist() {

    const [user,b]=useState([]);

    // const alluserlist = () => {
    //     fetch("http://localhost:7500/emp").then((r) => {
    //         console.log(r);
    //         return r.json();
    //     }).then((d) => {
    //         console.log(d);
    //         b(d);
    //     })
    // }

    const alluserlist = ()=>{
        axios.get("http://localhost:7500/emp").then((r)=>{
            console.log(r);
            b(r.data)
        })
    }



    useEffect(() => {
        alluserlist();
    }, []);

    return (
        <div className='container-fluid'>
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
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((a) => {
                                return (
                                    <tr>
                                        <th scope="row">{a.id}</th>
                                        <td>{a.email}</td>
                                        <td>{a.fullname}</td>
                                        <td>{a.role}</td>
                                        <td>{a.dob}</td>
                                        <td>{a.mobile}</td>
                                        <td>{a.pass}</td>
                                        <td>
                                            <Link to={"edit/"+a.id} class="badge text-bg-primary">View</Link>
                                            <span class="badge text-bg-warning ms-2">Edit</span>
                                            <span class="badge text-bg-danger ms-2">Del</span>
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