import React from 'react';


const Todo = ({task, id, toggleTask, completed}) =>{
  return(
      <div className={`task${completed ? "done" : ""}`} 
      onClick={() => toggleTask(id)}
      >
        {task}
      </div>
  );
};


export default Todo;
