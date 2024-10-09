import { useContext, useRef, useState } from 'react';

import { TodoContext } from '../context/TodoContext';

const NewTodoForm = () => {
  const [completed, setCompleted] = useState(false);
  const { addNewTodo } = useContext(TodoContext);
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textRef.current || textRef.current.value === '') return;
    addNewTodo(textRef.current.value, completed);

    textRef.current.value = '';
    setCompleted(false);
  };

  const handleCheckboxChange = () => {
    setCompleted((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center' data-testid='add-new-todo'>
      <div className='h-12 sm:h-16 relative bg-secondary w-[330px] sm:w-[540px] mt-16 items-center rounded-md flex justify-around'>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleCheckboxChange}
          className="peer relative w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔'] checked:before:absolute checked:before:left-1 checked:before:top-[1px] checked:before:text-white checked:before:text-[12px]"
        />
        <input
          type='text'
          name='todo'
          className='w-full text-xs sm:text-base bg-secondary focus:outline-none text-incomplete placeholder:text-new-todo'
          placeholder='Create a new todo...'
          ref={textRef}
        />
      </div>
    </form>
  );
};

export default NewTodoForm;
