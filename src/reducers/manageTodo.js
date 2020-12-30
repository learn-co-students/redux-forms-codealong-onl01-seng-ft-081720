export default function manageTodo(state = {
  todos: [],
}, action) {
  switch(action.type) {
    case 'ADD_TODO':
      console.log({todos:
      state.todos.concat(action.payload.text) });

      return {todos: 
      state.todos.concat(action.payload.text) };

      default:
        return state;
  }

  // console.log("reducer received this action:", action);

  // return state;
}
// First, we made sure the React component of our application was working. We did this by building a form, and then making sure that whenever the user typed in the form's input, the state was updated.

// Second, We connected the component to Redux and designed our mapDispatchToProps

// Third, we built our reducer such that it responded to the appropriate event and concatenated the payload into our array of todos.