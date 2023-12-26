import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.APP_API_URL,
});
