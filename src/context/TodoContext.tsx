import { createContext } from 'react';

import { Todo } from '../utils/reducer';

type TodoContextType = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
  updateTodo: (id: string, text: string) => void;
};

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);
