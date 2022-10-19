const initialState = '';

const searchSlice = (state = initialState, action) => {
   if (action.type === 'search/searchTodo') {
      return action.payload;
   }

   return state;
};


export default searchSlice;