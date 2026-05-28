import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Headerpage from '../../shares/Headerpage'
import Footerpage from '../../shares/Footerpage'
import Sidebarpage from '../../shares/Sidebarpage'

function Fullpage() {
    return (
        <Fragment>
            <Headerpage />

            <div className='container-fluid'>
                <div className='row page'>
                    <div className='col-2'>
                        <Sidebarpage />
                    </div>
                    <div className='col-10'>
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
            <Footerpage />

        </Fragment>
    )
}

export default Fullpage