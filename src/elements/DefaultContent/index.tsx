import { FC } from 'react';

export const DefaultContent: FC = () => {
  return (
    <>
      <p className="layout__default-text layout__default-text--desktop">
        Click button &quot;Load&ldquo; to fetch data shipments
      </p>
      <p className="layout__default-text layout__default-text--mobile">
        Click select to fetch data shipments
      </p>
    </>
  );
};
