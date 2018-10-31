import api from '../config/api';

const profileService = {
  getUser: id => api.get(`/Users/${id}`),
  updateUser: ({ idUser, userData }) => api.patch(`/Users/${idUser}`, userData)
};

export default profileService;
