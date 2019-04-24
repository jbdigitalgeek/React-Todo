import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todos = [
  {
    task: "Clean Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Cancel Gym Membership",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
      newInput: ""
    };
  }
  changeTodo = event => {
    this.setState({
      newInput: {
        ...this.state.newInput,
        task: event.target.value,
        id: Date.new(),
        completed: false
      }
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.newInput],
      newInput: {
        task: "",
        id: "",
        completed: ""
      }
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          
          newInput={this.state.newInput}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
