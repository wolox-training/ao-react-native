import { createTypes, completeTypes } from 'redux-recompose';

import bookService from '../../services/BookService';

export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOK');

const target = {
  ITEMS_BOOKS: 'itemsBooks'
};

const actionsCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: target.ITEMS_BOOKS,
    service: bookService.getBooks
  })
};

export default actionsCreators;
