import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const getAll = async () => {
  return axios({
    method: 'GET',
    url: 'https://mindicador.cl/api',
    headers,
  });
};

export const getByCode = async code => {
  return axios({
    method: 'GET',
    url: `https://mindicador.cl/api/${code}`,
    headers,
  });
};
