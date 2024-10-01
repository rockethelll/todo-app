export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type Action =
  | { type: 'ADD'; payload: { text: string } }
  | { type: 'DELETE'; payload: { id: string } }
  | { type: 'TOGGLE'; payload: { id: string; completed: boolean } }

export const reducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: crypto.randomUUID(), text: action.payload.text, completed: false }];

    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload.id);

    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo,
      );
    default:
      throw new Error(`No action found for ${action}.`);
  }
};
