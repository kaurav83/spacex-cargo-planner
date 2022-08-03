import { FC } from 'react';

import { CustomLink } from '../CustomLink';
import { ICompany } from '../../types';

type Props = {
  company: ICompany;
};

export const SidebarElement: FC<Props> = ({ company }) => {
  return (
    <li key={company.id} className="sidebar__list-item">
      <CustomLink to={`/${company.id}`}>{company.name}</CustomLink>
    </li>
  );
};
