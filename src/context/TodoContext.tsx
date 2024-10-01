import { createContext } from 'react';

import type { Todo } from '../utils/reducer';

type TodoContextType = {
  todos: Todo[];
  addNewTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
}

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);
