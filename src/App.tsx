import { useMemo } from 'react';

import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { TodoContext } from './context/TodoContext';
import { useTodos } from './utils/useTodos';

function App() {
  const { todos, addNewTodo, deleteTodo, toggleTodo } = useTodos();
  const contextValue = useMemo(
    () => ({ todos, addNewTodo, deleteTodo, toggleTodo }),
    [todos, addNewTodo, deleteTodo, toggleTodo],
  );

  return (
    <TodoContext.Provider value={contextValue}>
      <div className='flex flex-col items-center w-full h-screen px-6 py-12 transition-all duration-300 bg-primary '>
        <Header />
        <NewTodoForm />
        <TodoList todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
