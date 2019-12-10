import React, {Component} from 'react';
import Todos from './todo'

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
      todos,
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
