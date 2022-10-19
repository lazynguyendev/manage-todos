import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Search.module.scss';

import { searchTodo } from '../../store/actions';
import { searchSelector } from '../../store/selectors';

function Search() {
   const dispatch = useDispatch();

   const [keywords, setKeywords] = useState('');  

   const handleSearchChange = (searchInput) => {
      setKeywords(searchInput);
   };

   const handlePressEnter = (e) => {
      if (e.key === 'Enter' && keywords) {
         dispatch(searchTodo(keywords));
      }
   };

   return (
      <div className={styles.searchContainer}>
         <input 
            type="text" 
            value={keywords}
            placeholder="Search todo..."
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyUp={handlePressEnter}
         />
         <span>
            <i className="fa-solid fa-magnifying-glass"></i>
         </span>
      </div>
   );
}

export default Search;