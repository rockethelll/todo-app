import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';
import { Todo } from '../utils/type';

const checkboxCompleted =
  "checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔']  checked:before:text-white checked:before:text-[12px]";

const TodoItem = ({ id, text, completed }: Todo) => {
  // For drag and drop
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <form
      className='h-12 relative bg-secondary w-[330px] sm:w-[540px] items-center flex justify-around border-b border-complete last:border-b-0'
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
      ref={setNodeRef}
      style={style}
    >
      <input
        type='checkbox'
        // className={`peer w-[26px] sm:w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox flex justify-center items-center ${
        //   completed ? checkboxCompleted : ''
        // }`}
        className={clsx(
          'peer w-[26px] sm:w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox flex justify-center items-center',
          { [checkboxCompleted]: completed },
        )}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        checked={completed}
        data-testid='toggle-todo'
      />
      <input
        type='text'
        name='todo'
        className={clsx(
          'w-full text-xs sm:text-base bg-secondary focus:outline-none text-incomplete hover:cursor-pointer touch-none select-none',
          { 'line-through text-complete': completed },
        )}
        value={text}
        readOnly
        {...attributes}
        {...listeners}
      />
      <button
        onClick={() => deleteTodo(id)}
        data-testid='delete-todo'
        className={`${showDeleteButton ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src='/images/icon-cross.svg' alt='Delete todo' className='mr-5' />
      </button>
    </form>
  );
};

export default TodoItem;
