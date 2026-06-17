import React from 'react'
import { FaPersonCirclePlus } from "react-icons/fa6";
import { GoStack } from "react-icons/go"
import Charts from './Charts';

function Userlandingpage() {
const username = "ravi singh";
const  userr=[{name:"ravi",age:50,phone:"46897545"},{},{},{}];
const func = ()=>{
  alert("welcome to child");
}

  return (
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-2'>
          <div class="card bg-info text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Total Students</h6>
              <h3> <FaPersonCirclePlus/> 1000</h3>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div class="card bg-warning text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Mern Course</h6>
              <h3> <GoStack/> 400</h3>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div class="card bg-danger text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Java Course</h6>
              <h3>400</h3>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div class="card bg-success text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Mean stack</h6>
              <h3>200</h3>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div class="card bg-primary text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Total Female</h6>
              <h3>400</h3>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div class="card bg-dark text-white shadow text-decoration-none">
            <div class="card-body">
              <h6 class="card-title">Total Male</h6>
              <h3>600</h3>
            </div>
          </div>
        </div>

        <div className='col-md-8 mt-3'>
          <div class="card bg-dark text-white shadow">
            <div class="card-body">
              
<Charts xyz={username} abc={func}/>

              
            </div>
          </div>
        </div>
        <div className='col-md-4 mt-3'>
          <div class="card bg-dark text-white shadow">
            <div class="card-body">
              <h6 class="card-title">Graph</h6>
              <h2>600</h2>
               <h2>600</h2>
                <h2>600</h2>
                 <h2>600</h2>
            </div>
          </div>
        </div>


        



      </div>
    </div>

  )
}

export default Userlandingpage