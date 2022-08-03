import { IRoute } from '../types';
import { CompanyPage } from '../pages';

export const routes: Array<IRoute> = [
  {
    key: 'company',
    title: 'Company 1111',
    path: '/:id',
    enabled: true,
    component: CompanyPage,
    index: false,
  },
];
