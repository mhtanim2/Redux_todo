import Swal from "sweetalert2"
import { editTodo } from "../../redux/stateSlice/todo/todoSlice"
import store from "../../redux/store/store"
export const editItem=(item,i)=>{
    Swal.fire({
        title: 'Update Item..',
        text: "Enter Updated Data",
        icon: 'question',
        input: 'text',
        inputValue:item,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update!',
        inputValidator: (value)=>{
            if (value) {
                store.dispatch(editTodo({index:i,task:value}))
            }
        }
      })
}