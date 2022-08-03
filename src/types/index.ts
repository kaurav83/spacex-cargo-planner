import { FC } from 'react';

export interface IRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC;
  index?: boolean;
}

export interface ICompany {
  id: string;
  name: string;
  email: string;
  boxes: string;
}

export type ContextProps = {
  companies: ICompany[] | [];
  setCompanies: (companies: ICompany[]) => void;
};
