import React from 'react';


const Todo = ({item, id, toggleTask, completed}) =>{
  return(
      <div className={`task ${completed ? "done" : ""}`} 
      onClick={() => toggleTask(id)}
      >
        {item}
      </div>
  );
};


export default Todo;

// import React from 'react'


// const Todo = ({id, item, completed, toggle}) => {
//     return (
//         <div className={'todo-item' + (completed ? 'todo-completed': '')} onClick={() => toggle(id)}>
//             {item}
//         </div>
//     );   
// };
// export default Todo 
