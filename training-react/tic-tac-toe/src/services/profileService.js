import api from '../config/api';

const profileService = {
  getUser: () => {
    const idUSer = localStorage.getItem('userId');
    return api.get(`/Users/${idUSer}`);
  },
  updateUser: params => {
    const idUSer = localStorage.getItem('userId');
    return api.patch(`/Users/${idUSer}`, params);
  }
};

export default profileService;
