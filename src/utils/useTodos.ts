import { useEffect, useReducer } from 'react';

import type { Todo } from './reducer';
import { reducer } from './reducer';

const LOCAL_STORAGE_KEY = 'TODOS';

const seedTodos = [
  { id: '1', text: 'Test todo 1', completed: false },
  { id: '2', text: 'Complete online JavaScript course', completed: true },
  { id: '3', text: 'Jog around the park 3x', completed: false },
  { id: '4', text: '10 minutes meditation', completed: false },
];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(reducer, seedTodos, (initialValue) => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedTodos) return initialValue;

    const parsedTodos = JSON.parse(storedTodos);

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

  return { todos, addNewTodo, deleteTodo, toggleTodo };
};
