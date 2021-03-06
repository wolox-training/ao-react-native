import { buildTranslations, buildConstants } from '../utils/i18nUtils';
import * as Routes from '../constants/routes';

// TODO: Replace here the screens titles

const namespace = 'app';
const translations = {
  es: {
    [Routes.Login]: 'Login',
    [Routes.Main]: 'Main view',
    [Routes.TodoList]: 'Todo List',
    [Routes.Home]: 'Home',
    [Routes.BookList]: 'Book List',
    [Routes.BookDetail]: 'Book Detail',
    titleMessage: 'Todo List',
    placeholderItem: 'Enter an item!',
    author: 'Author:',
    genre: 'Genre:',
    publisher: 'Publisher:',
    year: 'Year:',
    btnLogout: 'Logout!',
    btnGoBooks: 'Go to Books List'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
