import { $authHost, $host } from './index';
import { jwtDecode } from 'jwt-decode';

export const login = async (login, password) => {
  const { data } = await $host.post('api/user/login', { login, password });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/check');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const createApplications = async (name, tel, mail, service, descr) => {
  const { data } = await $host.post('api/user/applications', { name, tel, mail, service, descr });
  return data;
};

export const updateApplications = async (id) => {
  const { data } = await $authHost.patch('api/applications/update/' + id);
  return data;
};

export const getAllApplications = async () => {
  const { data } = await $authHost.get('api/applications');
  return data;
};
