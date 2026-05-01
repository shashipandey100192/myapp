import React from 'react';
import { useSelector } from 'react-redux';

function Reduxpage() {
    const myage = useSelector((state) => state.myfunc.age)

  return (
    <div>Reduxpage  {myage}</div>
  )
}

export default Reduxpage