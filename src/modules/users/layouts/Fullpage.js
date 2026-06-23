import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Headerpage from '../../shares/Headerpage'
import Footerpage from '../../shares/Footerpage'
import Sidebarpage from '../../shares/Sidebarpage'
import ChatBot from 'react-chatbotify'
import { Mysetting } from '../../shares/Chatbotsetting'

function Fullpage() {
    return (
        <Fragment>
            <Headerpage />
            <div className='container-fluid'>
                <div className='row page'>
                    <div className='col-2 border'>
                        <Sidebarpage />
                    </div>
                    <div className='col-10 border'>
                        <Outlet></Outlet>
                        <ChatBot settings={Mysetting}/>
                    </div>
                </div>
            </div>
            

        </Fragment>
    )
}

export default Fullpage