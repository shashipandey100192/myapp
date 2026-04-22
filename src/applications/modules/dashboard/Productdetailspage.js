import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Productdetailspage() {
    const {id} = useParams();
    const [user,userupdate]=useState({})

    const getdata = ()=>{
  axios.get(`https://dummyjson.com/users/${id}`).then((d)=>{
    console.log(d.data);
    userupdate(d.data);
   
  })
}

useEffect(()=>{
  getdata();
},[])

  return (
    <div>Productdetailspage
        <h2>{id}</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default Productdetailspage