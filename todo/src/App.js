import React, {useState} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';


const todoItems = [  
  {task: "Clean car", id: "1", completed: false},
  { task: "Grocery shopping", id: "2", completed: false },
  { task: "Meal prep", id: "3", completed: false }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {tasks: todoItems};
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

  render() {
    return (

        <div className="app">
          <h2>What should I do today?</h2>
          <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
          <TodoForm addTask={this.addTask} updateTodo={this.updateTodo} clearComplete={this.clearComplete} />
        </div>

    );
  }
}

export default App;