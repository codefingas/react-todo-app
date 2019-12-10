import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        content : ''
    };

    handleChange = (e) => { // function updates everytime we input something inside the input field
       this.setState({
           content : e.target.value
       })
    };

    handleSubmit = (e) => { // function handles final submit
        e.preventDefault();

        this.props.addTodo(this.state); // passing the state to the addTodo prop recieved on the front end

        this.setState({ // resetting the component state
            content: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo :</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    };
};

export default AddTodo;