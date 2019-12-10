import React, {Component} from 'react';
import Todos from './todo';
import AddTodo from './AddForm';

class App extends Component {
  state = {
      todos : [
        {id : 1, content: "Buy some milk"},
        {id: 2, content: "Play mario Kart"}
      ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => { // filters the todo to check if 
        return todo.id !== id;
    });

    this.setState({
      todos, // used es6 to automatically augment todo
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();

    let todos = [...this.state.todos, todo];

    this.setState({ // adding it with es6
      todos,
    });

  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
