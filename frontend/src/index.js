import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import './bootstrap.min.css'
import App from './App';
import i18next from './i18n_init';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';


// activate .env file
require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
