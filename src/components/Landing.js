import React from 'react';

const mydata =[
  {name:'ravi',age:20,height:'2ft'},
  {name:'mohan',age:20,height:'2ft'},
  {name:'pankaj',age:20,height:'2ft'},
  {name:'pooja',age:20,height:'2ft'},
  {name:'shashi',age:20,height:'2ft'},
  {name:'pandey',age:20,height:'2ft'},
];




function Landing() {
  return (
    <>
    
    <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
    
    {mydata.map(({name,age})=>(
      <p>{name} , {age}</p>
    ))}



    
    </>
  )
}

export default Landing
