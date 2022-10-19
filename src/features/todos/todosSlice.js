// categories = ['personal', 'home', 'project'];

const initialState = [
   { id: 1, text: 'Learn JavaScript', completed: false, category: 'Personal' },
   { id: 2, text: 'Learn React', completed: true, category: 'Home' },
   { id: 3, text: 'Learn Redux', completed: false, category: 'School' },
]

const todosSlice = (state = initialState, action) => {

   switch (action.type) {
      case 'todos/addTodo':
         return [...state, action.payload]
      case 'todos/completedStatusChange':
         return state.map(todo => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  completed: true
               }
            }
            return todo;
         });
      default:
         return state;
   }
};

export default todosSlice;

