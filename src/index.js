import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import AppContainer from './containers/AppContainer/AppContainer';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

// const io = require('socket.io-client');
// const socket = io(process.env.REACT_APP_BACKEND_ADDRESS);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AppContainer />
        {/* <AppContainer socket={socket}/> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
