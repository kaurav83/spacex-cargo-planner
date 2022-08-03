import { useContext } from 'react';

import { CompaniesContext } from '../lib/context/companiesContext';
import { ICompany, ContextProps } from '../types';
import { useFetchCompanies } from './useFetchCompanies';
import { api } from '../api';

export const useSearchCompany = () => {
  const { setCompanies } = useContext(CompaniesContext) as ContextProps;
  const { fetchCompanies } = useFetchCompanies();

  const searchCompany = async (keyword: string) => {
    const data: ICompany[] = await api.getCompanies();

    if (keyword !== '') {
      const results = data.filter((company: ICompany) => {
        return company.name.toLowerCase().startsWith(keyword.toLowerCase());
      });

      setCompanies(results);
    } else {
      fetchCompanies();
    }
  };

  return {
    searchCompany,
  };
};
