import React from "react";
import { useSelector } from "react-redux";
import { editItem } from "./editTodo";
import { details } from "./infoTodo";
import { todoRemoveAlert } from "./removeTodo";
function ListTodo() {
  const todoItem = useSelector((state) => state.todo.value);
  let today = new Date().toLocaleDateString()
 // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {todoItem.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button className="btn btn-sm btn-info text-white" onClick={()=>{editItem(item,i)}}>Update</button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-danger text-white" onClick={()=>{todoRemoveAlert(i)}}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-secondary text-white" onClick={()=>{details(item,i+1,today)}}>
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
