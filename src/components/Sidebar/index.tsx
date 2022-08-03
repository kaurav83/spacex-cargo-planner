import { FC, useContext } from 'react';

import { CompaniesContext } from '../../lib/context/companiesContext';
import { ICompany, ContextProps } from '../../types';
import { SidebarElement } from '../../elements/SidebarElement';

import './index.scss';

export const Sidebar: FC = () => {
  const { companies } = useContext(CompaniesContext) as ContextProps;

  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {companies.map((company: ICompany) => {
          return <SidebarElement key={company.id} company={company} />;
        })}
      </ul>
    </aside>
  );
};
