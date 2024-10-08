import React, { useContext } from 'react';

import { TodoContext } from '../context/TodoContext';
import Filters from './Filters';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const isEmpty = todos.length === 0;

  return (
    <div className='rounded-lg relative shadow-lg sm:w-[540px] w-[330px] mt-5 overflow-hidden'>
      {!isEmpty ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
        ))
      ) : (
        <div className='flex items-center justify-center w-full h-12 bg-secondary'>
          <p className='text-gray-500'>Aucune tâche pour le moment.</p>
        </div>
      )}
      <Filters />
    </div>
  );
};

export default React.memo(TodoList);
