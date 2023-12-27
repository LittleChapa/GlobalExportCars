import { $authHost, $host } from './index';

export const createAbout = async (text) => {
  const { data } = await $host.post('api/about/', text);
  return data;
};

export const updateAbout = async (id, text) => {
  const { data } = await $host.patch('api/about/update/' + id, { text });
  return data;
};

export const getAllAbout = async () => {
  const { data } = await $host.get('api/about/');
  return data;
};
