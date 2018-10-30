import api from '../config/api';

const profileService = {
  getUser: id => api.get(`/Users/${id}`),
  updateUser: (id, params) => api.patch(`/Users/${id}`, params)
};

export default profileService;
