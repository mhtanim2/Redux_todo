import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/stateSlice/todo/todoSlice";
function CreateTodo() {
    const dispatch=useDispatch();
    let inputRef=useRef();
  const addFunction=()=>{
    dispatch(addTodo(inputRef.current.value));
    
  }
  
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <input
            type="text" ref={inputRef}
            placeholder="Enter your task"
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <button onClick={addFunction} className="btn btn-primary text-white">Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
