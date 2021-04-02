import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from './store';
import App from './App.js';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, 
            document.getElementById('root'));