import clsx from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { FiltersContext } from '../context/FiltersContext';

const FiltersLink = () => {
  const { activeFilter, handleActiveFilter } = useContext(FiltersContext);

  const handleFilterClick = (filter: string) => {
    handleActiveFilter(filter);
  };

  const baseClasses = 'mr-5 text-xs sm:text-sm font-bold hover:text-incomplete';

  // Classes for buttons based on active filter
  const getButtonClasses = (filter: string) =>
    twMerge(
      baseClasses,
      clsx({
        'text-link-active': activeFilter === filter,
        'text-new-todo': activeFilter !== filter,
      }),
    );

  return (
    <>
      <button className={getButtonClasses('all')} onClick={() => handleFilterClick('all')}>
        All
      </button>
      <button className={getButtonClasses('active')} onClick={() => handleFilterClick('active')}>
        Active
      </button>
      <button
        className={getButtonClasses('completed')}
        onClick={() => handleFilterClick('completed')}
      >
        Completed
      </button>
    </>
  );
};

export default FiltersLink;
