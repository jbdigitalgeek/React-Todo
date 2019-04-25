import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Add Todo Here"
      />
      <button onClick={props.handleAddTodo}>Submit</button>
      <button onClick={props.handleClearTodos}>Remove Finished</button>
    </form>
  );
};

export default TodoForm;
