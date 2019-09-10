
import React from 'react';
import styled from 'styled-components';

const Todo = props =>{
  return(
    <StyledTodo>
      <div className={`task${props.task.completed ? "done" : ""}`} onClick={() => props.toggleTask(props.task.id)}>
        {props.task.task}
      </div>
    </StyledTodo>
  );
};

const StyledTodo = styled.div `
  .taskdone{
    text-decoration: line-through;
    text-decoration-color: #bd2a6e;
  }
`;

export default Todo;