import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function UserLogin() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 border shadow'>
          <h1 className='pt-3 mb-5 text-center'>Login page</h1>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div class="mb-3">
                  <label class="form-label"> <MdOutlineMailOutline/> Email address</label>
                  <input type="email" class="form-control" />
                </div>
              </div>

              <div className='col-md-12'>
                <div class="mb-3">
                  <label class="form-label"> <RiLockPasswordLine/> Password</label>
                  <input type="password" class="form-control" />
                </div>
              </div>
              <div className='col-md-12 text-center'>
                 <div class="mb-3">
                 
                  <input type="button" class="btn btn-success" value="login"/>
                  <Link to="registor" >New User</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin