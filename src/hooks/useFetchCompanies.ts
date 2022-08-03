import { useContext, useEffect } from 'react';

import { api } from '../api';
import { CompaniesContext } from '../lib/context/companiesContext';
import { ICompany, ContextProps } from '../types';
import { parsedData } from '../helpers/parsedData';

export const useFetchCompanies = () => {
  const { setCompanies } = useContext(CompaniesContext) as ContextProps;

  useEffect(() => {
    setCompanies(parsedData());
  }, []);

  const fetchCompanies = async () => {
    const data: ICompany[] = await api.getCompanies();
    setCompanies(data);
  };

  return {
    fetchCompanies,
  };
};
