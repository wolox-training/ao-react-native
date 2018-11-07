import api from '../config/api';

const bookService = {
  getBooks: () => api.get('/api/books')
};

export default bookService;
