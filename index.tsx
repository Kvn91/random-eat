import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';
import App from './App';
import reducers from './reducers';
import { getRestaurants } from './actions/restaurants.actions';

let store = createStore(reducers);

console.log(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
