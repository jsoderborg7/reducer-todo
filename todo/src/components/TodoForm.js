import React, {useState} from 'react';


const TodoForm = ({addTask, clearCompleted}) =>{
  const [task, setTask] = useState('');
     
  const handleSubmit = e =>{
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  const handleClearComplete = e =>{
    e.preventDefault();
    clearCompleted();
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
        
        type= 'text'
        placeholder= 'Add task'
        name = 'input'
        onChange= {e => setTask(e.target.value)}
        value= {task}
      />
      <button type= 'submit'>Add task</button> 
      <button onClick= {handleClearComplete}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;