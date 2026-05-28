import React from 'react'

function Userregistor() {
  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 border p-3 bg-light shadow'>

                    <div className='container-fluid '>
                        <div className='row '>
                            <div className='col-12 text-center'>
                                <p className='h5 mb-5'>User Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                             <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Mobile No</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Role</label>
                                    <select className='form-select'>
                                        <option hidden>role</option>
                                        <option>user</option>
                                        <option>admin</option>
                                    </select>
                                </div>
                            </div>




                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-outline-success" value="Registor Now" />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
  )
}

export default Userregistor