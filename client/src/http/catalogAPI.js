import { $authHost, $host } from './index';

export const creteCatalog = async (catalog) => {
  const { data } = await $host.post('api/catalog/', catalog);
  return data;
};

export const updateCatalog = async (id, catalog) => {
  const { data } = await $host.patch('api/catalog/' + id, catalog);
  return data;
};

export const removeCatalog = async (id) => {
  const { data } = await $host.delete('api/catalog/' + id);
  return data;
};

export const getAllCatalog = async () => {
  const { data } = await $host.get('api/catalog/');
  return data;
};
