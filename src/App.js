import React from 'react';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Clean Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Cancel Gym Membership',
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
  addTodo = props => {
    props.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo], todo: ''
    });
    
  };
  
  
  
  render() {
    return (
      <div></div>
    );
  }
}

export default App;
