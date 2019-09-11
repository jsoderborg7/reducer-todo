import React from 'react';
import Todo from './Todo';


const TodoList = ({toggleTask, tasks}) =>{

  return(

      <div>
        {tasks.map(task =>(
          <Todo 
            key={task.id} 
            {...task} 
            toggleTask={toggleTask}/>
          ))}
      </div>
  );  
};


export default TodoList;
