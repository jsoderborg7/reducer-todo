import React from 'react';
import styled from 'styled-components';

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
      <StyledTodoForm>
        <div className="formContainer">
          <form onSubmit={this.submitChange}>
            <input className="inputBox" type="text" value={this.state.task} name="task" placeholder="Add task" onChange={this.todoChangeHandler} />
            <div className="buttons">
              <button onChange={this.todoChangeHandler}>Add Task</button>
              <button onClick={this.removeItem}>Clear Completed</button>
            </div>
          </form>
        </div>
      </StyledTodoForm>
    );
  }
}

const StyledTodoForm = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding-top: 5%;
.inputBox{
  width: 95%;
  margin-bottom: 2%;
  font-size: 1.5rem;
  padding: 2%;
  border-radius: 10px;
  background-color: #85aabf;
  color: white;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  margin: 3%;
  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    }
  button{
    border-radius: 10px;
    padding: 3%;
    cursor: pointer;
    background-color: #583c75;
    border: none;
    box-shadow: 0 0 2px 2px;
    color: white;
    @media screen and (max-width: 500px){
      width: 50%;
      margin-top: 5%;
    }
  }
  button:hover{
    background-color: #bd2a6e;
  }
}
`;

export default TodoForm;