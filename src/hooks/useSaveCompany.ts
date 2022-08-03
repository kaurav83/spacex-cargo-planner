import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CompaniesContext } from '../lib/context/companiesContext';
import { ICompany, ContextProps } from '../types';
import { parsedData } from '../helpers/parsedData';

export const useSaveCompany = () => {
  const { id } = useParams();
  const { companies } = useContext(CompaniesContext) as ContextProps;

  const company = companies && companies.find((item: ICompany) => item.id === id);

  const saveCompany = () => {
    let collection = [];

    if (parsedData() && Array.isArray(parsedData()) && company) {
      const filteredCollection = parsedData().filter((item: ICompany) => item.id !== company.id);

      collection = [company, ...filteredCollection];
    } else {
      collection.push(company);
    }

    localStorage.setItem('companies', JSON.stringify(collection));
  };

  return {
    saveCompany,
  };
};
