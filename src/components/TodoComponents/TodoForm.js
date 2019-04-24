import React from 'react';
import { tsPropertySignature } from '@babel/types';

const TodoForm = props => {
    return (
        <form onSubmit = {props.handleAddTodo}>
            <input
                onChange={props.changeTodo}
                type="text"
                name="todo"
                value={props.newInput.task}
                placeholder="Add Todo Here"
            />
            <button onClick={props.handleAddTodo}>Submit</button>
            <button onClick={props.handleClearTodos}>Remove Finished</button>
        </form>
    );
};

export default TodoForm;