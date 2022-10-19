import Todos from './components/Todos';
import Search from './components/Search';
import styles from './App.module.scss';

import logo from './logo.png';

function App() {
   return (
         <div className={styles.wrapper}>
            <header>
               <div className={styles.logoContainer}>
                  <img src={logo} alt="todos-logo" />
               </div>
               <h1>Todos App</h1>
               <Search />
            </header>
            
            <main>
               <Todos />
            </main>

            <footer>
               <h2>Filters</h2>
            </footer>


         </div>
   );
}


export default App;