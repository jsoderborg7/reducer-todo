export const initialState = {
  tasks:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: "Clean car",  
    completed: false,
    id: 3782457624
  }]
}

export const todoReducer = (state, action) =>{
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        tasks: state.tasks.map(task =>(
          task.id === action.payload ? {...task, completed: !task.completed} : task
        ))
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat({item: action.payload, completed: false, id: Date.now()})
      };

    case 'CLEAR_COMPLETED':
      return {
        tasks: state.tasks.filter(({completed}) => !completed)
      };
      
    default:
      return state;
  } 
}