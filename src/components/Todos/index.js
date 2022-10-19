import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';

import { remainingTodosSelector } from '../../store/selectors';
import * as actions from '../../store/actions';

import styles from './Todos.module.scss';
import { PlusIcon } from '../../assets/FontsAwesome';

function Todos() {
   const dispatch = useDispatch();
   const todos = useSelector(remainingTodosSelector);

   const [todoInput, setTodoInput] = useState('');
   const [category, setCategory] = useState();
   const [checked, setChecked] = useState([]);
   const [completed, setCompleted] = useState([]);
   const [invalid, setInvalid] = useState(false);
   
   const handleAddTodoClick = () => {
      const data = { id: nanoid(), text: todoInput, completed: false, category };

      if ((!todoInput) || (!category) || (category === '-- Category --')) {
         setInvalid(true);
      } else {
         dispatch(actions.addTodo(data));
         setInvalid(false);
         setTodoInput('');
      }
   };

   const handleCheckedChange = (id) => {
      setChecked(prevState => {
         if (!prevState.includes(id)) return [...prevState, id];
         else return prevState.filter(checked => checked !== id);
      });
   };

   const handleDoneClick = (id) => {
      setCompleted(prevState => [...prevState, id]);
      dispatch(actions.completedStatusChange(id));
   };

   

   return (
      <div className="todos-container">
         <div className={styles.inputContainer}>
            <div>
               <input 
                  type="text" 
                  placeholder="What do you need to do today?..."
                  value={todoInput}
                  onChange={e => setTodoInput(e.target.value)}
               />

               <span className={clsx(styles.none, {
                  [styles.notification]: invalid && (!todoInput)
               })}>Please enter todo</span>

               <select value={category} onChange={e => setCategory(e.target.value)}>
                  <option>-- Category --</option>
                  <option>Home</option>
                  <option>Pesonal</option>
                  <option>Project</option>
                  <option>School</option>
               </select>

               <span className={clsx(styles.none, {
                  [styles.notification]: invalid && (!category) || (invalid && (category === '-- Category --'))
               })}>Please select category</span>

            </div>

            <div className={styles.addBtnContainer}>
               <button onClick={handleAddTodoClick}>
                  Add Todo
                  <span>
                     <PlusIcon />
                  </span>
               </button>
            </div>
         </div>

         <ul>
            {todos.map(todo => (
               <li
                  className={clsx(styles.todoItem, {
                     [styles.completed]: todo.completed
                  })} 

                  key={todo.id}       
               >
                  
                  <input
                     disabled={todo.completed}
                     type="checkbox"
                     checked={checked.includes(todo.id) || todo.completed} 
                     onChange={() => handleCheckedChange(todo.id)} 
                  />

                  <span>
                     {todo.text} 
                     <span className={clsx({
                        [styles[todo.category.toLowerCase()]]: true
                     })}>{todo.category}</span>
                  </span>

                  <button
                     disabled={todo.completed}
                     className={clsx({
                        [styles.active]: checked.includes(todo.id) || todo.completed,
                        [styles.disabled]: todo.completed
                     })}
                     onClick={() => handleDoneClick(todo.id)}            
                  >
                     Done <i className="fa-solid fa-check"></i>            
                  </button>

               </li>
            ))}


         </ul>
      </div>
   );
}

export default Todos;