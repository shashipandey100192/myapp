import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: 90,
  username:"kumar",
  course:"web design"
}


export const myslicer = createSlice({
name:"myfunc",
initialState,
reducers:{
    changename: (state)=>{
        state.username="ravi singh";
    },
    changeage: (state)=>{
        state.age = 80;
    },
    changecourse: (state)=>{
        state.course="react js";
    },
    overage: (state)=>{
        state.age=state.age+10;
    }
}

});


export const {changename,changeage,changecourse,overage} = myslicer.actions

export default myslicer.reducer