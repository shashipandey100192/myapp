import React from 'react'
import { Link } from 'react-router-dom'

function Apperror() {
  return (
    <div className='container-fluid bg-danger' style={{height:"100%"}}>
      <div className='row '>
        <div className='col-12 text-center g-0'>
          <h1 className='mt-5 cs'>404</h1>
          <p>Page Not Found</p>
          <Link to="/" className='btn btn-danger btn-sm'>Back to Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Apperror