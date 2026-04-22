import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { CiRead } from "react-icons/ci";
import axios from 'axios';

function UserDashboard() {

const [userlist,updateuserlist]=useState([]);


const getdata = ()=>{
  axios.get("http://localhost:8500/employee").then((d)=>{
    console.log(d.data);
    updateuserlist(d.data);;
  })
}

useEffect(()=>{
  getdata();
},[])




  return (
    <div className="container-fluid">
      <div className='row p-3'>
        <div className='col-md-6'>
          <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"> <IoIosSearch/></span>
  <input type="text" class="form-control" placeholder="Search" />
</div>
        </div>
        <div className='col-md-6 text-end'>
          <button className='btn btn-danger'> <FaTableCellsLarge/> </button>
          <button className='btn btn-danger ms-2'> <FaListUl/> </button>
          <button className='btn btn-danger ms-2'> <FaAddressCard/> </button>
     
        </div>
      </div>
      <div className="row">
        <div className='col-12'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Course</th>
                <th scope="col">Profile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {userlist.map((u)=>{
              return(
                <tr>
                <th scope="row">{u.id}</th>
                <td>{u.email}</td>
                <td>{u.fullname}</td>
                <td>{u.phone}</td>
                <td>{u.gender}</td>
                <td>{u.course}</td>
                <td>
                  <img src={u.profile} alt='dfhdfg' width="30"/>
                </td>
                <td>
                  <button className='btn btn-primary btn-sm'><CiRead/></button>
                  <button className='btn btn-warning btn-sm'><CiRead/></button>
                  <button className='btn btn-danger btn-sm'><CiRead/></button>
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

export default UserDashboard