import { forwardRef, ComponentPropsWithoutRef } from 'react';

import './index.scss';

interface Props extends ComponentPropsWithoutRef<'input'> {
  placeholder: string;
  type: 'text' | 'search';
  className: string;
  onChange: () => void;
}

export const Field = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} {...props} />;
});
