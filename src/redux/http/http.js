import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const userPrivateAPI = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const token = {
  set: token => {
    userPrivateAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    userPrivateAPI.defaults.headers.Authorization = '';
  },
};
