import React from "react";
/* import TodoCount from "../component/todoCount/TodoCount"; */
import CreateTodo from "../component/todoComponent/CreateTodo";

import ListTodo from "../component/todoComponent/ListTodo";
function TodoPage() {
  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Todo App</h4>
            </div>
            <div className="card-body">
              <CreateTodo />
              <ListTodo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
