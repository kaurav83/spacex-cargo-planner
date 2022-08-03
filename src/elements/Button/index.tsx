import { FC } from 'react';

import './index.scss';

type Props = {
  buttonType: JSX.IntrinsicElements['button']['type'];
  children: string;
  className: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ buttonType, children, className, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
