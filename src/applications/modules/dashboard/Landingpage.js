import React, { useEffect, useState } from 'react'

function Landingpage() {
   const abc = JSON.parse(localStorage.getItem("mydata"));

const [locald,updatedata]=useState({})
const mylocadata = ()=>{
 updatedata(JSON.parse(localStorage.getItem("mydata")));
}

useEffect(()=>{
  mylocadata();
},[]);



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div class="card shadow bg-info text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-success text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-dark text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-warning text-white">
              <div class="card-body">
                <h5 class="card-title">local storage</h5>
                <p>{abc.email}</p>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                {locald.email}
              </div>
          </div>
        </div>

        <div className='col-md-8 mt-3'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landingpage