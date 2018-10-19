import api from '../config/api';

const loginService = {
  authUser: params => api.post('/Users/login', params),
  setToken: token => api.setHeader('Authorization', token)
};

export default loginService;
