import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"kumar",
  age:50,
  phone:"545454545",
  addaress:""
}

export const myslicer = createSlice({
     name: 'counter',
     initialState,
     reducers: {
        changeage: (state)=>{
            state.age+=80;
        },
        changename: (state)=>{
            state.username="skdjfkosd fkjsf sdh";
        },
        details: (state)=>{
            state.addaress = ` <h3> current address :</h3>  <p> phone: ${state.phone} </p>  <p> age: ${state.age}</p> <p>Username: ${state.username} </p>`;
        }
     }

})

export const { changeage, changename ,details} = myslicer.actions

export default myslicer.reducer