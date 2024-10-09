export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: 'ADD'; payload: { text: string; completed: boolean } }
  | { type: 'DELETE'; payload: { id: number } }
  | { type: 'TOGGLE'; payload: { id: number; completed: boolean } }
  | { type: 'SET'; payload: { todos: Todo[] } };

export const reducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [{ id: todos.length + 1, text: action.payload.text, completed: action.payload.completed }, ...todos];

    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload.id);

    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo,
      );

    case 'SET':
      return action.payload.todos;

    default:
      throw new Error(`No action found for ${action}.`);
  }
};
