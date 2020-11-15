import axios from 'axios';

let baseURL = ''
if(process.env.NODE_ENV == 'development'){
  baseURL = process.env.REACT_APP_PATH
}else{
  baseURL = process.env.REACT_APP_PATH_PRODUCTION
}
const instance = axios.create({
  baseURL
});
export const setAxiosInterceptors = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
};

export default instance;
