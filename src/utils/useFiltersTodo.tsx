import { useContext } from 'react';

import { FiltersContext } from '../context/FiltersContext';
import type { Todos } from './type';

const useFiltersTodo = ({ todos }: Todos) => {
  const { activeFilter } = useContext(FiltersContext);

  switch (activeFilter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
  }
};

export default useFiltersTodo;
