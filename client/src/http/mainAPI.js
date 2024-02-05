import { $authHost, $host } from './index';

export const createMain = async (main) => {
  const { data } = await $authHost.post('api/main/', main);
  return data;
};

export const updateMain = async (id, main) => {
  const { data } = await $authHost.patch('api/main/update/' + id, main);
  return data;
};

export const getMain = async (id) => {
  const { data } = await $host.get('api/main/' + id);
  return data;
};
