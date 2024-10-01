import React from 'react';

import { Todos } from '../utils/type';
import TodoItem from './TodoItem';

const TodoList = ({ todos }: Todos) => {
  if (!todos.length) {
    return <p className='text-center text-gray-500'>Aucune tâche pour le moment.</p>;
  }

  return (
    <div className='rounded-lg relative shadow-lg w-full sm:w-[330px] mt-5 overflow-hidden'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
