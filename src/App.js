import React from "react";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";
import "./App.css";

function App() {
  const todoItems = todosData.map(item => (
    <ToDoItem key={item.id} item={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
