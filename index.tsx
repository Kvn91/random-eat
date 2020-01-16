import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './style.css';
import App from './App';
import reducers from './reducers';
import { getRestaurants } from './actions/restaurants.actions';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(getRestaurants());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
