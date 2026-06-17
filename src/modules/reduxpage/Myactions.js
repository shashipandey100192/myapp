import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"kumar",
  age:50,
  phone:"545454545"
}

export const myslicer = createSlice({
     name: 'counter',
     initialState,
     reducers: {
        changeage: (state)=>{
            state.age=80;
        },
        changename: (state)=>{
            state.username="skdjfkosd fkjsf sdh";
        }
     }

})

export const { changeage, changename } = myslicer.actions

export default myslicer.reducer