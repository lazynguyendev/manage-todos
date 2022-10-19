const addTodo = payload => ({
   type: 'todos/addTodo',
   payload
});

const completedStatusChange = payload => ({
   type: 'todos/completedStatusChange',
   payload
});

const searchTodo = payload => ({
   type: 'search/searchTodo',
   payload
});

export {
   addTodo,
   completedStatusChange,
   searchTodo
};







