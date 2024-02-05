import { $authHost, $host } from './index';

export const createService = async (title, descr, price) => {
  const { data } = await $authHost.post('api/service/', { title, descr, price });
  return data;
};

export const updateService = async (id, title, descr, price) => {
  const { data } = await $authHost.patch('api/service/update/' + id, { title, descr, price });
  return data;
};

export const removeService = async (id) => {
  const { data } = await $authHost.delete('api/service/' + id);
  return data;
};

export const getAllService = async () => {
  const { data } = await $host.get('api/service/');
  return data;
};
