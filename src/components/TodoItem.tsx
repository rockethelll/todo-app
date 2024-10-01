import { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';
import { Todo } from '../utils/type';

const checkboxCompleted =
  "checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔'] checked:before:absolute checked:before:left-1.5 checked:before:top-[1px] checked:before:text-white checked:before:text-[12px]";

const TodoItem = ({ id, text, completed }: Todo) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <form
      className='h-12 relative bg-secondary w-[330px] items-center flex justify-around border-b border-separator last:border-b-0'
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <input
        type='checkbox'
        className={`peer relative w-7 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox ${
          completed ? checkboxCompleted : ''
        }`}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        checked={completed}
      />
      <input
        type='text'
        name='todo'
        className={`w-full text-xs bg-secondary focus:outline-none text-new-todo ${
          completed ? 'line-through text-complete' : ''
        } `}
        value={text}
        readOnly
      />
      <button
        onClick={() => deleteTodo(id)}
        data-button-delete
        className={`${showDeleteButton ? 'opacity-100' : 'opacity-0'}`}
      >
        <img src='/images/icon-cross.svg' alt='Delete todo' className='mr-5' />
      </button>
    </form>
  );
};

export default TodoItem;
