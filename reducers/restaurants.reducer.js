import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const restaurants = (state, action) => {
  switch (action.type) {
    case types.VOTE_FOR_A_RESTAURANT:
      return {...state, voted: true};
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

export default combineReducers({allRestaurants, allRestaurantsById});