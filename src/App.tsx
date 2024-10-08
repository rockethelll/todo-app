import FiltersLink from './components/FiltersLink';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { FiltersProvider } from './context/FiltersContext';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <FiltersProvider>
        <div className='flex flex-col items-center w-full h-screen px-6 py-12 transition-all duration-300 bg-primary '>
          <Header />
          <NewTodoForm />
          <TodoList />
          <div className='flex h-12 mt-4 relative bg-secondary w-[330px] items-center justify-center sm:hidden rounded-lg shadow-lg'>
            <FiltersLink />
          </div>
        </div>
      </FiltersProvider>
    </TodoProvider>
  );
}

export default App;
