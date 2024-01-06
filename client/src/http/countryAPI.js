import { $authHost, $host } from './index';

export const getAllCountry = async () => {
  const { data } = await $host.get('api/country/');
  return data;
};

export const getOneCountry = async (id) => {
  const { data } = await $host.get('api/country/' + id);
  return data;
};
