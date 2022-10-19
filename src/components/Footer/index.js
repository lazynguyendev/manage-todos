import { useState } from 'react';

const initialState = [
   { id: 1, text: 'Learn JavaScript', completed: false, category: 'Personal' },
   { id: 2, text: 'Learn React', completed: false, category: 'Home' },
   { id: 3, text: 'Learn Redux', completed: false, category: 'School' },
]

function Footer() {
   const [checked, setChecked] = useState([]);

   console.log(checked);

   const handleChange = (id) => {
      setChecked(prevState => {
         if (!prevState.includes(id)) return [...prevState, id];
         else return prevState.filter(checked => checked !== id);
      });
   };

   return (
      <div>
         <ul>
            {initialState.map(data => (
               <li key={data.id}>
                  <input 
                     type="checkbox" 
                     checked={checked.includes(data.id)}
                     onChange={() => handleChange(data.id)}
                  />
                  {data.text}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Footer;