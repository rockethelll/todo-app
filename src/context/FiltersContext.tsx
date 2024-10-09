import { createContext, useCallback, useMemo, useState } from 'react';

type FiltersContextType = {
  handleActiveFilter: (filter: string) => void;
  activeFilter: string;
};

type FiltersProviderProps = {
  children: React.ReactNode;
};

export const FiltersContext = createContext<FiltersContextType>({
  handleActiveFilter: () => {},
  activeFilter: 'all',
});

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleActiveFilter = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const filterValue = useMemo(
    () => ({
      handleActiveFilter,
      activeFilter,
    }),
    [handleActiveFilter, activeFilter],
  );

  return <FiltersContext.Provider value={filterValue}>{children}</FiltersContext.Provider>;
};
