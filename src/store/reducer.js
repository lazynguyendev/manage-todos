import { combineReducers } from 'redux';
import todosSlice from '../features/todos/todosSlice';
import searchSlice from '../features/search/searchSlice';

const reducer = combineReducers({
   todos: todosSlice,
   search: searchSlice
});

export default reducer;