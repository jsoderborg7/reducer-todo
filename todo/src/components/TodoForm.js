import React from 'react';


class TodoForm extends React.Component{
  constructor(){
    super();
    this.state = { task: "" };
  }	
     
  todoChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  submitChange = event =>{
    event.preventDefault();
    this.props.addTask(this.state.task);
  };

  removeItem = event =>{
    event.preventDefault();
    this.props.clearComplete(this.state.task);
  };

  render(){
    return (

        <div className="formContainer">
          <form onSubmit={this.submitChange}>
            <input className="inputBox" type="text" value={this.state.task} name="task" placeholder="Add task" onChange={this.todoChangeHandler} />
            <div className="buttons">
              <button onChange={this.todoChangeHandler}>Add Task</button>
              <button onClick={this.removeItem}>Clear Completed</button>
            </div>
          </form>
        </div>

    );
  }
}

export default TodoForm;