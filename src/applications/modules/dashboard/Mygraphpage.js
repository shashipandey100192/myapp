
import React,{useEffect,useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';



function Mygraphpage() {

const [userlist,updateuserlist]=useState([]);
const [myfilter,updatefilter]=useState([])

const getdata = ()=>{
  axios.get("https://dummyjson.com/products").then((d)=>{
    updateuserlist(d.data.products);
    // const abc = d.data.products.filter((f)=>{
    //   return f
    // })
    // console.log(abc);

  

  })
}

useEffect(()=>{
  getdata();
},[])



  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col-4 g-0'>
    <select className='form-select'>
      {myfilter.map((d)=>{
        return(<option>{d}</option>);
      })}
    </select>
        </div>
        <div className='col-12'>
          <BarChart
          style={{ width: '100%', maxWidth: '100%', maxHeight: '80vh', aspectRatio: 1.618 }}
            responsive
            data={userlist}>
                 <XAxis dataKey="category" />
            <Bar dataKey="stock" fill="#1d662f"/>
             <Tooltip />
             <YAxis width="auto" />
           {/* <Bar dataKey="price" fill="#1d662f"/> */}
          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Mygraphpage