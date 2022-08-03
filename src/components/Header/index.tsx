import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useFetchCompanies, useSaveCompany, useSearchCompany } from '../../hooks';
import { Field } from '../../elements';
import { Button } from '../../elements/Button';

import './index.scss';

export const Header: FC = () => {
  const { fetchCompanies } = useFetchCompanies();
  const { saveCompany } = useSaveCompany();
  const { searchCompany } = useSearchCompany();
  const ref = useRef<HTMLInputElement>(null);

  const handleFetchData = () => {
    fetchCompanies();

    localStorage.removeItem('companies');
  };

  const handleSaveCompany = () => {
    saveCompany();
  };

  const handleSearch = () => {
    searchCompany(ref.current!.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div>
          <Link className="header__logo" to="/">
            Cargo Planner
          </Link>
        </div>
        <div className="header__right-side">
          <div className="header__search">
            <Field
              ref={ref}
              placeholder="Search"
              type="search"
              className="search-field header__search-field"
              onChange={handleSearch}
            />
          </div>
          <div className="header__button-group">
            <Button
              buttonType="button"
              className="button header__button-download"
              onClick={handleFetchData}
            >
              Load
            </Button>
            <Button
              buttonType="button"
              className="button header__button-save"
              onClick={handleSaveCompany}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
