import React from 'react'
import { FcAlarmClock,FcFaq } from "react-icons/fc";
import { TfiHome } from "react-icons/tfi";
// import myimg from './assets/images/10.jpg';
const myimg  = "https://static.vecteezy.com/system/resources/thumbnails/058/144/254/small/beautiful-flowers-wallpaper-image-of-flowers-free-photo.jpg";



function Page() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <img src={myimg} alt='pppppppsdjfh'/>
            <img src={myimg} alt='sdfsfsd'/>
            <img src="images/10.jpg" alt='ssdfg' width="400"/>
           <h1> <FcAlarmClock/></h1>
            <FcFaq/>
            <TfiHome/>
            </div>
        </div>
    </div>
  )
}

export default Page