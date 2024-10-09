import clsx from 'clsx';
import { useContext } from 'react';

import { FiltersContext } from '../context/FiltersContext';

const FiltersLink = () => {
  const { activeFilter, handleActiveFilter } = useContext(FiltersContext);

  const handleFilterClick = (filter: string) => {
    handleActiveFilter(filter);
  };

  return (
    <>
      <button
        className={clsx('mr-5 text-xs font-bold hover:text-incomplete text-new-todo', {
          'text-blue-500': activeFilter === 'all',
        })}
        onClick={() => handleFilterClick('all')}
      >
        All
      </button>
      <button
        className={clsx('mr-5 text-xs font-bold hover:text-incomplete text-new-todo', {
          'text-blue-500': activeFilter === 'active',
        })}
        onClick={() => handleFilterClick('active')}
      >
        Active
      </button>
      <button
        className={clsx('text-xs font-bold hover:text-incomplete text-new-todo', {
          'text-blue-500': activeFilter === 'completed',
        })}
        onClick={() => handleFilterClick('completed')}
      >
        Completed
      </button>
    </>
  );
};

export default FiltersLink;
