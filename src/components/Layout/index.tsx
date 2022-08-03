import { FC, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header, Sidebar, Footer, SelectCompany } from '../index';
import { DefaultContent, Button } from '../../elements';
import { CompaniesContext } from '../../lib/context/companiesContext';
import { useFetchCompanies, useSaveCompany } from '../../hooks';
import { ContextProps } from '../../types';

import './index.scss';

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { companies } = useContext(CompaniesContext) as ContextProps;
  const { fetchCompanies } = useFetchCompanies();
  const { saveCompany } = useSaveCompany();

  useEffect(() => {
    if (companies.length === 0) {
      navigate('/');
    } else {
      navigate(`/${companies[0].id}`);
    }
  }, [companies]);

  const handleLoadShipments = () => {
    fetchCompanies();
    localStorage.removeItem('companies');
  };

  return (
    <div className="layout">
      <Header />
      <SelectCompany />
      {companies && companies.length ? (
        <>
          <Sidebar />
          <Outlet />
          <Button
            buttonType="button"
            className="button button__mobile button button__mobile--load"
            onClick={handleLoadShipments}
          >
            Load
          </Button>
          <Button
            buttonType="button"
            className="button button__mobile  button__mobile--save"
            onClick={() => saveCompany()}
          >
            Save
          </Button>
        </>
      ) : (
        <DefaultContent />
      )}
      <Footer />
    </div>
  );
};
