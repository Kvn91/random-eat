import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './style.css';
import App from './App';
import reducers from './reducers';
import { getRestaurants } from './actions/restaurants.actions';