import React from 'react';


const Todo = ({item, id, toggleTask, completed}) =>{
  return(
      <div className={`task${completed ? "done" : ""}`} 
      onClick={() => toggleTask(id)}
      >
        {item}
      </div>
  );
};


export default Todo;

