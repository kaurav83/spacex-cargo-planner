export const parsedData = () => {
  const storageData: string | null = localStorage.getItem('companies');

  return storageData ? JSON.parse(storageData) : [];
};
