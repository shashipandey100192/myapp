import React from 'react'
import { Link } from 'react-router-dom'

function Appsidebar() {
  return (
    <div class="flex-shrink-0 p-3" > <Link to="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">  <span class="fs-5 fw-semibold">Collapsible</span> </Link> <ul class="list-unstyled ps-0"> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
      Home
    </button> <div class="collapse" id="home-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
       <li><Link to="/dashboard" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li> 
       <li><Link to="main" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Main</Link></li> 
       <li><Link to="graphpage" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Graph</Link></li>
       <li><Link to="employeepage" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Employee</Link></li>
       <li><Link to="productlist" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Product</Link></li>
       <li><Link to="lazypage" class="link-body-emphasis d-inline-flex text-decoration-none rounded">lazyloading</Link></li>
       <li><Link to="pagination" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Pagination</Link></li>
       <li><Link to="redux" class="link-body-emphasis d-inline-flex text-decoration-none rounded">reduxpage</Link></li>
        </ul> </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
      Dashboard
    </button> <div class="collapse" id="dashboard-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</Link></li> </ul> </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
      Orders
    </button> <div class="collapse" id="orders-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</Link></li> </ul> </div> </li> <li class="border-top my-3"></li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
      Account
    </button> <div class="collapse" id="account-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</Link></li> <li><Link to="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</Link></li> </ul> </div> </li> </ul> </div>
  )
}

export default Appsidebar