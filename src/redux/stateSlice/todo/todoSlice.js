import { createSlice } from "@reduxjs/toolkit";

export const todoSlice= createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload);
          //  debugger;
        },
        removeTodo:(state,action)=>{
            state.value.splice(action.payload,1);
        },
        editTodo:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
        }

    }
})
export default todoSlice.reducer
export const{addTodo,removeTodo,editTodo}=todoSlice.actions