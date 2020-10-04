import axios from 'src/utils/axios';

class FirebaseAuthService {
  setAxiosInterceptors = (token) => {
    axios.interceptors.request.use(
      async config =>
        {
          config.headers = { 
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
          return config;
      }, error =>{
        Promise.reject(error)
      }
    );
  };
}

const authService = new FirebaseAuthService();

export default authService;
