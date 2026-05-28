import React from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-3 border p-3 bg-light shadow'>

                    <div className='container-fluid '>
                        <div className='row '>
                            <div className='col-12 text-center'>
                                <p className='h5 mb-5'>Login page</p>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-outline-success" value="login" />
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