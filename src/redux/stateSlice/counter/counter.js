import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:4
    },
    reducers:{
        increment:(state)=>{
            debugger;
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
        ,customActionState:(state,action)=>{
            debugger;
            state.value=action.payload;
        }
    }
})

export const {increment,decrement,customActionState}=counterSlice.actions
export default counterSlice.reducer