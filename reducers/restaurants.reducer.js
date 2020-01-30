import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const restaurants = (state, action) => {
  switch (action.type) {
    case types.VETO_A_RESTAURANT:
      return {...state, veto: true};
    case types.VETO_A_RESTAURANT:
      return {...state, votes: votes+1};
    default:
      return state;
  }
}

const allRestaurants = (state =  [], action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS: 
      return action.restaurants;
    default:
      return state.map(restaurant => {
        if (action.restaurantId === restaurant.id) {
          return restaurants(restaurant, action)
        }
        return restaurant;
      });
  }
}

const votedRestaurants = (state = [], action) => {
  switch (action.type) {
    case types.VOTE_FOR_A_RESTAURANT:
      return [...state, restaurants(action.restaurant, action)]
    default:
      return state;
  }
}

const allRestaurantsById = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS: 
      return {
        ...state, 
        ...action.restaurants.reduce((obj, restaurant) => {
          obj[restaurant.id] = restaurant;
          return obj;
        }, {})
      };
    default:
      const { restaurantId } = action;
      if (restaurantId) {
        return {
          ...state,
          [restaurantId]: restaurants(state[restaurantId], action)
        }
      }
      return state;
  }
}

export default combineReducers({allRestaurants, votedRestaurants});