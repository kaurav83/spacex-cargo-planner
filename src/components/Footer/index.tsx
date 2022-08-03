import { FC } from 'react';

import './index.scss';

export const Footer: FC = () => {
  return <div className="footer">SpaceX Cargo Planner {new Date().getUTCFullYear()} </div>;
};
