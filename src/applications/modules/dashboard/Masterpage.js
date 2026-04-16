import React, { Fragment } from 'react'
import Appheader from '../../sharecomponents/Appheader'
import Appsidebar from '../../sharecomponents/Appsidebar'
import Appfooter from '../../sharecomponents/Appfooter'
import Landingpage from './Landingpage'
import { Outlet } from 'react-router-dom'

function Masterpage() {

    const username="ravi singh";
    const user = {name:"pankaj",role:"admin"}
    const message = ()=>{
        alert("welcome to func");
    }


  return (
<Fragment>
    <Appheader xyz={username} menu={user} myfunc={message}></Appheader>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <Appsidebar></Appsidebar>
        </div>
        <div className='col-md-10 cus-h border g-0'>
            <Outlet></Outlet>

        </div>
    </div>
   </div>
   <Appfooter></Appfooter>
   </Fragment>
  )
}

export default Masterpage