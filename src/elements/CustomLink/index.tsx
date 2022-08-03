import { FC } from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

import './index.scss';

type Props = {
  children: string;
  to: string;
};

export const CustomLink: FC<Props> = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={match ? 'link link--is-active' : 'link'} to={to} {...props}>
      {children}
    </Link>
  );
};
