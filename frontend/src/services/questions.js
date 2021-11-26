import axios from 'axios';

const baseUrl = '';

const get = () => {
  const request = axios.get(`${baseUrl}`);
  return request.then((res) => res.data);
};

const send = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
};

const questions = { get, send };
export default questions;
