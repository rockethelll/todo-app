import { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';
import { Todo } from '../utils/type';

const checkboxCompleted =
  "checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔']  checked:before:text-white checked:before:text-[12px]";

const TodoItem = ({ id, text, completed }: Todo) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <form
      className='h-12 relative bg-secondary w-[330px] sm:w-[540px] items-center flex justify-around border-b border-complete last:border-b-0'
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <input
        type='checkbox'
        className={`peer w-[26px] sm:w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox flex justify-center items-center ${
          completed ? checkboxCompleted : ''
        }`}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        checked={completed}
        data-testid='toggle-todo'
      />
      <input
        type='text'
        name='todo'
        className={`w-full text-xs bg-secondary focus:outline-none text-new-todo hover:cursor-pointer ${
          completed ? 'line-through text-complete' : ''
        } `}
        value={text}
        readOnly
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
