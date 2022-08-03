import { createContext, useState, ReactElement, useMemo, FC } from 'react';
import { ICompany, ContextProps } from '../../types';

export const CompaniesContext = createContext<ContextProps | null>(null);

type Props = {
  children: ReactElement;
};

export const ShipmentsProvider: FC<Props> = ({ children }) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const memoizedCompanies = useMemo(
    () => ({
      companies,
      setCompanies,
    }),
    [companies],
  );

  return (
    <CompaniesContext.Provider value={memoizedCompanies}>{children}</CompaniesContext.Provider>
  );
};
