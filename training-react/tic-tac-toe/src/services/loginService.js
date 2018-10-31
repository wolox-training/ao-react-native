import api from '../config/api';

const loginService = {
  authUser: params => api.post('/Users/login', params),
  setToken: token => api.setHeader('Authorization', token),
  logout: () => api.post('/Users/logout')
};

export default loginService;
