import { createContext, useMemo } from 'react';

import type { Todo } from '../utils/reducer';
import { useTodos } from '../utils/useTodos';

type TodoContextType = {
  todos: Todo[];
  addNewTodo: (text: string, completed: boolean) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number, completed: boolean) => void;
  setTodos: (newTodos: Todo[]) => void;
};

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const { todos, addNewTodo, deleteTodo, toggleTodo, setTodos } = useTodos();

  const contextValue = useMemo(
    () => ({ todos, addNewTodo, deleteTodo, toggleTodo, setTodos }),
    [todos, addNewTodo, deleteTodo, toggleTodo, setTodos],
  );

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
