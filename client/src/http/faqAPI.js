import { $authHost, $host } from './index';

export const createFaq = async (title, descr) => {
  const { data } = await $host.post('api/faq/', { title, descr });
  return data;
};

export const updateFaq = async (id, title, descr) => {
  const { data } = await $host.patch('api/faq/update/' + id, { title, descr });
  return data;
};

export const removeFaq = async (id) => {
  const { data } = await $host.delete('api/faq/' + id);
  return data;
};

export const getAllFaq = async () => {
  const { data } = await $host.get('api/faq/');
  return data;
};
