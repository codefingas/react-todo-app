import React from 'react';
import './todoItem.css'

const Todos = ({todos, deleteTodo}) => { // destructring the todos off the props object

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="todo-item" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
};

export default Todos;