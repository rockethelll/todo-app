import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import React, { useContext } from 'react';

import { TodoContext } from '../context/TodoContext';
import useFiltersTodo from '../utils/useFiltersTodo';
import Filters from './Filters';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const filteredTodos = useFiltersTodo({ todos }) || [];
  const isEmpty = filteredTodos?.length === 0;

  const getTodoPosition = (id: number) => filteredTodos.findIndex((todo) => todo.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const originalPosition = getTodoPosition(+active.id);
    const newPosition = getTodoPosition(+over.id);

    // Update the todos array
    const updatedTodos = arrayMove(filteredTodos, originalPosition, newPosition);
    setTodos(updatedTodos);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
      <div className='rounded-lg relative shadow-lg sm:w-[540px] w-[330px] mt-5 sm:mt-9 overflow-hidden' data-testid='todo-list'>
        <SortableContext items={filteredTodos} strategy={verticalListSortingStrategy}>
          {isEmpty ? (
            <div className='flex items-center justify-center w-full h-12 bg-secondary'>
              <p className='text-gray-500'>Aucune tâche pour le moment.</p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
            ))
          )}
        </SortableContext>
        <Filters />
      </div>
    </DndContext>
  );
};

export default React.memo(TodoList);
