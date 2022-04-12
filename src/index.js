import React from 'react';
import ReactDOM from 'react-dom';
/*eslint-disable no-unused-vars*/
import $ from 'jquery';
/*eslint-enable no-unused-vars*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import configureStore from './store/configureStore';
import App from './App';
import './utils/reactotronConfig';
import { handleClientLoad } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore;

// Init youtube gapi client
handleClientLoad();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'));
registerServiceWorker();