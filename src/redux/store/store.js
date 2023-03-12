import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../stateSlice/counter/counter'
import sumReducer from '../stateSlice/sum/sum'
import todoReducer from "../stateSlice/todo/todoSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    sum:sumReducer,
    todo:todoReducer
  }
})