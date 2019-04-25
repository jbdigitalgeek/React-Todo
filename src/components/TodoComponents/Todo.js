import React from "react";
import "./Todo.scss"

const Todo = props => {
  return (
    <div className="todo-container"
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
