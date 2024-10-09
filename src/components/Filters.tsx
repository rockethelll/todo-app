import { useContext } from 'react';

import { TodoContext } from '../context/TodoContext';
import FiltersLink from './FiltersLink';

const Filters = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    todos.forEach((todo) => {
      if (todo.completed) {
        deleteTodo(todo.id);
      }
    });
  };

  return (
    <div className='h-12 sm:h-16 relative bg-secondary w-[330px] sm:w-[540px] items-center flex justify-between'>
      <p className='ml-5 text-xs sm:text-sm text-new-todo'>
        {itemsLeft} {itemsLeft < 2 ? 'item' : 'items'} left
      </p>
      <div className='hidden sm:flex'>
        <FiltersLink />
      </div>
      <button
        className='mr-5 text-xs sm:text-sm text-new-todo hover:text-incomplete'
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
