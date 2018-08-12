import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <HttpsRedirect>
          <App />
      </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
