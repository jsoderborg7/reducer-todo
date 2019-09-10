import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = props =>{
  return(
    <StyledTodoList>
      <div>
        {props.tasks.map(task =>(
          <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
          ))}
      </div>
    </StyledTodoList>
  );  
};

const StyledTodoList = styled.div `
  font-size: 2rem;
  font-weight: bold;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
  color: #583c75;
  text-shadow: .5px .5px white;
`;

export default TodoList;