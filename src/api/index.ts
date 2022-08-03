import { ICompany } from '../types';

export const api = Object.freeze({
  async getCompanies(): Promise<ICompany[]> {
    const response = await fetch('shipments.json');
    const shipments = await response.json();

    return shipments;
  },
});
