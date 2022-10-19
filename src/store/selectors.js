const selectTodos = state => state.todos;
const searchSelector = state => state.search; 

const remainingTodosSelector = state => {
   return state.todos.filter(todo => todo.text.toLowerCase().includes(state.search.toLowerCase()));
};

export {
   selectTodos,
   searchSelector,
   remainingTodosSelector
};



