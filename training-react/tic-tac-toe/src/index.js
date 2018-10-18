import RouteCheck from '@components/RouteCheck';
import React from 'react';
import ReactDOM from 'react-dom';
import store from '@redux/store';
import { Provider } from 'react-redux';

import './scss/application.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <RouteCheck />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
