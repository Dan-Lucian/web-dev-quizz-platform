import axios from 'axios';

const urlApi = '/api/questions';

const get = (topics, limit) => {
  const params = `?topics=${encodeURIComponent(
    JSON.stringify(topics)
  )}&limit=${limit}`;

  const request = axios.get(`${urlApi}${params}`);
  return request.then((res) => res.data);
};

const send = (newObject) => {
  const request = axios.post(urlApi, newObject);
  return request.then((res) => res.data);
};

const questions = { get, send };
export default questions;
