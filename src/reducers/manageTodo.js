import uuid from "uuid";

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  // debugger;
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text,
      };
      return { todos: state.todos.concat(todo) };
  
    case 'DELETE_TODO':
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
      // look at todos array, filter by id, and return an array without the objects where the id DOES NOT = the payload

    default:
      return state;
  }
}
