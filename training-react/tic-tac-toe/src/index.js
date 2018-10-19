import App from '@screens/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import store from '@redux/store';
import { Provider } from 'react-redux';

import './scss/application.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
