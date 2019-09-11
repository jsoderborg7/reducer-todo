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
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input 
          
          type= 'text'
          placeholder= 'Add task'
          name = 'input'
          onChange= {e => setTask(e.target.value)}
          value= {task}
        />
        <div className="buttons">
          <button type= 'submit'>Add task</button> 
          <button onClick= {handleClearComplete}>Clear Completed</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm;