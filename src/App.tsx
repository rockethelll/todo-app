import { useEffect, useReducer } from 'react';

import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoItem from './components/TodoItem';
import { TodoContext } from './context/TodoContext';
import type { Todo } from './utils/reducer';
import { reducer } from './utils/reducer';

const LOCAL_STORAGE_KEY = 'TODOS';

const seedTodos = [
  { id: '1', text: 'Test todo 1', completed: false },
  { id: '2', text: 'Complete online JavaScript course', completed: true },
  { id: '3', text: 'Jog around the park 3x', completed: false },
  { id: '4', text: '10 minutes meditation', completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, seedTodos, (initialValue) => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedTodos) return initialValue;

    // Fusionner les todos seed avec celles du localStorage
    const parsedTodos = JSON.parse(storedTodos);

    // Ajouter les todos seed si elles ne sont pas déjà présentes
    const mergedTodos = [...parsedTodos];
    seedTodos.forEach((seedTodo) => {
      if (!parsedTodos.some((todo: Todo) => todo.id === seedTodo.id)) {
        mergedTodos.push(seedTodo);
      }
    });

    return mergedTodos;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (text: string) => {
    dispatch({ type: 'ADD', payload: { text } });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const toggleTodo = (id: string, completed: boolean) => {
    dispatch({ type: 'TOGGLE', payload: { id, completed } });
  };

  const updateTodo = (id: string, text: string) => {
    dispatch({ type: 'UPDATE', payload: { id, text } });
  };

  return (
    <TodoContext.Provider value={{ todos, deleteTodo, toggleTodo, updateTodo }}>
      <div className='w-full h-screen px-6 py-12 bg-primary'>
        <Header />
        <NewTodoForm addNewTodo={addNewTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
