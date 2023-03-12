import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderPage from "./page/HeaderPage";
import HomePage from "./page/HomePage";
import IdPage from "./page/IdPage";
import TodoPage from "./page/TodoPage";
const App = () => {
  return (
    <Router>
      
      <HeaderPage />
      
      <Routes>
        <Route path="/todo" element={<TodoPage/>}/>
        <Route path="/count" element={<HomePage />}/>
        <Route path="/home" element={<IdPage />}/>
        <Route path="*" element={<div>404.. Page not founded</div>}/>
      </Routes> 

    </Router>
  );
};

export default App;
