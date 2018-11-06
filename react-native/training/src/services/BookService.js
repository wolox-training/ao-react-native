import api from '../config/api';

const bookService = {
  getBooks: () => api.get('/books')
};

export default bookService;
