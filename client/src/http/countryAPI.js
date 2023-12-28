import { $authHost, $host } from './index';

export const getAllCountry = async () => {
  const { data } = await $host.get('api/country/');
  return data;
};
