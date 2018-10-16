import api from '../config/api';

const loginService = {
  authUser: params => api.post('/Users/login', params)
};

export default loginService;
