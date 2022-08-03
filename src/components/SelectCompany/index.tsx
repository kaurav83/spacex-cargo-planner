import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useFetchCompanies } from '../../hooks';
import { CompaniesContext } from '../../lib/context/companiesContext';
import { ContextProps, ICompany } from '../../types';

import './index.scss';

export const SelectCompany: FC = () => {
  const navigate = useNavigate();
  const { fetchCompanies } = useFetchCompanies();
  const { companies } = useContext(CompaniesContext) as ContextProps;

  const handleOpen = () => {
    if (!companies.length) {
      fetchCompanies();

      localStorage.removeItem('companies');
    }
  };

  return (
    <div className="select-wrapper">
      <div className="select-container">
        <Autocomplete
          onOpen={handleOpen}
          onChange={(event, object: ICompany) => navigate(`/${object.id}`)}
          autoSelect
          id="free-solo-2-demo"
          disableClearable
          getOptionLabel={(option: ICompany) => option.name || ''}
          options={companies}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </div>
    </div>
  );
};
