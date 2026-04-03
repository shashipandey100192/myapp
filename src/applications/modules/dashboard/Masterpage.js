import React, { Fragment } from 'react'
import Appheader from '../../sharecomponents/Appheader'
import Appsidebar from '../../sharecomponents/Appsidebar'
import Appfooter from '../../sharecomponents/Appfooter'
import Landingpage from './Landingpage'

function Masterpage() {
  return (

<Fragment>
    <Appheader></Appheader>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2'>
            <Appsidebar></Appsidebar>
        </div>
        <div className='col-md-10 cus-h border'>
            <Landingpage></Landingpage>

        </div>
    </div>
   </div>
   <Appfooter></Appfooter>
   </Fragment>
  )
}

export default Masterpage