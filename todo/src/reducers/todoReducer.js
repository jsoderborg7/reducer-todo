export const initialState = {
  tasks:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}

export const todoReducer = (state, action) =>{
  switch (action.type) {

    default:
      return state;
  } 
}