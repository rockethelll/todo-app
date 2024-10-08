import { useContext } from 'react';

import { FiltersContext } from '../context/FiltersContext';

const FiltersLink = () => {
  const { activeFilter, handleActiveFilter } = useContext(FiltersContext);

  const handleFilterClick = (filter: string) => {
    handleActiveFilter(filter);
    console.log('filter', filter);
  }

  return (
    <>
      <button
        className={`mr-5 text-xs font-bold ${
          activeFilter === 'all' ? 'text-blue-500' : ''
        } hover:text-incomplete text-new-todo`}
        onClick={() => handleFilterClick('all')}
      >
        All
      </button>
      <button
        className={`mr-5 text-xs font-bold ${
          activeFilter === 'active' ? 'text-blue-500' : ''
        } hover:text-incomplete text-new-todo`}
        onClick={() => handleFilterClick('active')}
      >
        Active
      </button>
      <button
        className={`text-xs font-bold ${
          activeFilter === 'completed' ? 'text-blue-500' : ''
        } hover:text-incomplete text-new-todo`}
        onClick={() => handleFilterClick('completed')}
      >
        Completed
      </button>
    </>
  );
};

export default FiltersLink;
