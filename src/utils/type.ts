export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Todos = {
  todos: Todo[];
};
