import React, {useReducer} from 'react';
import './App.css';

import {initialState, todoReducer} from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App () {
  
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTask = task => dispatch({type: 'ADD_TASK', payload: task});
  const clearCompleted = () => dispatch({type: 'CLEAR_COMPLETED'});
  const toggleTask = id => dispatch({type: 'TOGGLE_TODO', payload: id});

  return(
    <div className="App">
      <div className="appContainer">
        <div className="appTitle">
          <h1>Stuff To Do</h1>
        </div>
        <TodoList tasks={state.tasks} toggleTask={toggleTask} />
        <TodoForm addTask={addTask} clearCompleted={clearCompleted} />
      </div>
    </div>
  )
}

export default App;