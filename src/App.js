import React from "react";
import "./App.scss";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Cancel Gym",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Clean Garage",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
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
      todo: ""
    });
  };

  changeTodo = event =>
    this.setState({ [event.target.name]: event.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <div className="app-container">
        <div className="to-do-list">
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        </div>
        <div className="to-do-form">
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompleted}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
