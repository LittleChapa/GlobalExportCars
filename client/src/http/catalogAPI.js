import { $authHost, $host } from './index';

export const createCatalog = async (catalog) => {
  const { data } = await $authHost.post('api/catalog/', catalog);
  return data;
};

export const updateCatalog = async (id, catalog) => {
  const { data } = await $authHost.patch('api/catalog/update/' + id, catalog);
  return data;
};

export const removeCatalog = async (id) => {
  const { data } = await $authHost.delete('api/catalog/' + id);
  return data;
};

export const getAllCatalog = async () => {
  const { data } = await $host.get('api/catalog/');
  return data;
};
