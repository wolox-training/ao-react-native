import { createTypes, completeTypes } from 'redux-recompose';

import bookService from '../../services/BookService';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['SET_SELECTED_BOOK']), '@@BOOK');

const target = {
  ITEMS_BOOKS: 'itemsBooks',
  SELECTED_BOOK: 'selectedBook'
};

const actionsCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: target.ITEMS_BOOKS,
    service: bookService.getBooks
  }),
  setSelectedBook: book => ({
    type: actions.SET_SELECTED_BOOK,
    target: target.SELECTED_BOOK,
    payload: book
  })
};

export default actionsCreators;
