import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components';

const tasks = [
  // {task: "Clean car", id: "1", completed: false},
  // { task: "Grocery shopping", id: "2", completed: false },
  // { task: "Meal prep", id: "3", completed: false }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {tasks};
  }

  addTask = taskName => {
    const newTodo = { task: taskName, id: Date.now(), completed: false };
    this.setState({ tasks: [...this.state.tasks, newTodo] });
  };

  clearComplete = () =>{
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  toggleTask = id =>{
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task =>{
        if (task.id === id) {
          return{
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledApp>
        <div className="app">
          <h2>What should I do today?</h2>
          <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
          <TodoForm addTask={this.addTask} updateTodo={this.updateTodo} clearComplete={this.clearComplete} />
        </div>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  margin: auto;
  padding: 5% 0%;
  background-color: #02b1b5;
  opacity: .9;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px;
  margin-top: 10%;
  @media screen and (max-width: 500px){
    width: 90%;
    }
  }
  h2{
    font-size: 3rem;
    text-align: center;
    text-decoration: underline;
    margin-top: 0;
    color: white;
    text-shadow: 2px 2px #583c75;
    @media screen and (max-width: 500px){
      font-size: 2rem;
      }
  }
  
`;

export default App;

export default App;
