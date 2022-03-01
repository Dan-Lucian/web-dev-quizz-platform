import axios from 'axios';

const urlApi = '/api/questions';

const get = () => {
  const request = axios.get(`${urlApi}`);
  return request.then((res) => res.data);
};

const send = (newObject) => {
  const request = axios.post(urlApi, newObject);
  return request.then((res) => res.data);
};

const questions = { get, send };
export default questions;
