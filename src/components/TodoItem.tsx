type TodoItemProps = {
  id: string;
  text: string;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ id, text, deleteTodo }: TodoItemProps) => {
  return (
    <div className='h-12 relative bg-secondary w-[330px] mt-4 border border-gray-900 items-center rounded-md flex justify-around'>
      <input
        type='checkbox'
        className="peer relative w-6 h-5 ml-5 mr-3 border rounded-full appearance-none cursor-pointer border-checkbox checked:bg-gradient-to-r checked:from-[hsl(192,100%,67%)] checked:to-[hsl(280,87%,65%)] checked:before:content-['✔'] checked:before:absolute checked:before:left-1 checked:before:top-[1px] checked:before:text-white checked:before:text-[12px]"
      />
      <input
        type='text'
        name='todo'
        className='w-full text-xs bg-secondary focus:outline-none text-new-todo placeholder-text-new-todo'
        value={text}
      />
      <button onClick={() => deleteTodo(id)} data-button-delete>
        <img src='/images/icon-cross.svg' alt='Delete todo' className='mr-5' />
      </button>
    </div>
  );
};

export default TodoItem;
