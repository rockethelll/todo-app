export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Todos = {
  todos: Todo[];
};
