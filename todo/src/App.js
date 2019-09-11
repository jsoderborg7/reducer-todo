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
    <div>
      <div>
        <h1>What should we do today?</h1>
      </div>
      <TodoForm addTask={addTask} clearCompleted={clearCompleted} />
      <TodoList tasks={state.tasks} toggleTask={toggleTask} />
    </div>
  )
}

export default App;