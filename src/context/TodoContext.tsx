import { createContext, useMemo } from 'react';

import type { Todo } from '../utils/reducer';
import { useTodos } from '../utils/useTodos';

type TodoContextType = {
  todos: Todo[];
  addNewTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
};

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const { todos, addNewTodo, deleteTodo, toggleTodo } = useTodos();

  const contextValue = useMemo(
    () => ({ todos, addNewTodo, deleteTodo, toggleTodo }),
    [todos, addNewTodo, deleteTodo, toggleTodo],
  );

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
