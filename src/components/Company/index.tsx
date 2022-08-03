import { FC, useContext, useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CompaniesContext } from '../../lib/context/companiesContext';
import { ICompany, ContextProps } from '../../types';
import { Field } from '../../elements';
import { calculateTotalBoxes } from '../../helpers/calculateTotalBoxes';

import './index.scss';

export const Company: FC = () => {
  const [sumBoxes, setSumBoxes] = useState(0);
  const { id } = useParams();
  const { companies } = useContext(CompaniesContext) as ContextProps;
  const ref = useRef<HTMLInputElement>(null);

  const defaultCompany = () => {
    return companies[0];
  };

  const { email, name, boxes } =
    companies.find((item: ICompany) => item.id === id) ?? defaultCompany();

  useEffect(() => {
    ref.current!.value = boxes;

    setSumBoxes(calculateTotalBoxes(boxes));
  }, [id]);

  const handleUpdateBoxes = () => {
    setSumBoxes(calculateTotalBoxes(ref.current!.value));
  };

  return (
    <section className="company__view">
      <h1>{name}</h1>
      <div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>Number of required cargo bays {Math.ceil(sumBoxes / 10)}</div>
      <div>
        <div className="company__wrapper-field">
          Cargo boxes
          <Field
            ref={ref}
            placeholder="Boxes"
            type="text"
            className="boxes-field"
            onChange={handleUpdateBoxes}
          />
        </div>
      </div>
    </section>
  );
};
