import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import { TodoContext } from '../context/TodoContext';

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string, completed: boolean) => void;
  updateTodo: (id: string, text: string) => void;
};

const checkboxCompleted =
  "checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔'] checked:before:absolute checked:before:left-1 checked:before:top-[1px] checked:before:text-white checked:before:text-[12px]";

const TodoItem = ({ id, text, completed }: TodoItemProps) => {
  const { deleteTodo, toggleTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textRef.current || textRef.current.value === '') return;

    updateTodo(id, textRef.current.value);
    setIsEditing(false);
  };

  return (
    <div className='h-12 relative bg-secondary w-[330px] mt-4 border border-gray-900 items-center rounded-md flex justify-around'>
      <input
        type='checkbox'
        className={`peer relative w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox ${
          completed ? checkboxCompleted : ''
        }`}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        checked={completed}
      />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            autoFocus
            className='w-full text-xs bg-secondary focus:outline-none text-new-todo placeholder-text-new-todo'
            defaultValue={text}
            ref={textRef}
          />
        </form>
      ) : (
        <>
          <input
            type='text'
            name='todo'
            className={`w-full text-xs bg-secondary focus:outline-none text-new-todo placeholder-text-new-todo ${
              completed ? 'line-through text-complete' : ''
            } `}
            value={text}
            readOnly
            onClick={() => setIsEditing(true)}
          />
          <button onClick={() => deleteTodo(id)} data-button-delete>
            <img src='/images/icon-cross.svg' alt='Delete todo' className='mr-5' />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
