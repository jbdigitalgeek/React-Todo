import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Cancel Gym',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Clean Garage',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm          
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
