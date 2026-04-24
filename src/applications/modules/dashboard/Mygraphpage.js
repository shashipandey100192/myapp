
import React,{useEffect,useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';



function Mygraphpage() {

const [userlist,updateuserlist]=useState([]);
const [myfilter,updatefilter]=useState([]);
const [data,filterda]=useState([]);
const [myca,setcat]=useState([]);

const getdata = ()=>{
  axios.get("https://dummyjson.com/products").then((d)=>{
    updateuserlist(d.data.products);
    filterda(d.data.products);

    const abc = d.data.products.map((f)=>{
      return f[myca]
    });

    const xyz = [...new Set(abc)]
      updatefilter(xyz);
  })
}

const filtervalue = (v)=>{
  console.log(v.target.value);
  const a = data.filter((d)=>{
    return d[myca]===v.target.value;
  });
  updateuserlist(a);
}


const changecag = (c)=>{
  getdata();
  console.log(c.target.value);
  setcat(c.target.value);
  
}


useEffect(()=>{
  getdata();
},[])



  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>

        <div className='col-md-4'>
          <select className='form-select' onChange={changecag}>
          <option hidden>filter By: </option>
           <option>category</option>
          <option>brand</option>
          <option>id</option>weight
          <option>weight</option>
        </select>

        </div>
        <div className='col-md-4 g-0'>
        
    <select className='form-select' onChange={filtervalue}>
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