import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PATH
});
export const setAxiosInterceptors = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
};

export default instance;
