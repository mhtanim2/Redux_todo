import { createSlice } from "@reduxjs/toolkit";
export const sumCount=createSlice({
    name: 'sum',
    initialState:{
        value:7
    },
    reducers:{
        theSum:(state,action)=>{
            state.value+=action.payload;
        },
        restart:(state)=>{
            state.value=0;
        }
    }
})

export const{theSum,restart}=sumCount.actions
export default sumCount.reducer