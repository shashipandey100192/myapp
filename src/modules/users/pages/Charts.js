import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




function Charts() {

  const [cdata, cdataupdate]=useState([])
  const [x,y]=useState([]);
  const [initchart,updatechart]=useState([]);

const userlist = ()=>{
  axios.get("http://localhost:7500/emp").then((d)=>{
    cdataupdate(d.data);
    updatechart(d.data);
    const abc =  d.data.map((r)=>{
      return r.role
    });

    const quev = [...new Set(abc)];
    y(quev);
  })

}

useEffect(()=>{
  userlist();
},[]);

const optselect = (d)=>{
  console.log(d.target.value);
  const mydata = initchart.filter((f)=>{
    return f.role===d.target.value
  });
  cdataupdate(mydata);

}


  return (
    <Fragment>
<h3>Total Users: {cdata.length}</h3>
<div className='container-fluid'>
  <div className='row'>
    <div className='col-md-3'>
      <select className='form-select' onChange={optselect}>
        <option hidden>select user type</option>
        {x.map((d)=>{
          return(
            <option>{d}</option>
          )
        })}
      </select>
    </div>
  </div>
</div>

    <BarChart
      style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={cdata}>
    
      <XAxis dataKey="fullname" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="salary" fill="#ff3300" />
      <Bar dataKey="hra" fill="#026179"/>
      <Bar dataKey="extra" fill="#0004fa"/>

    </BarChart>
    </Fragment>
  )
}

export default Charts