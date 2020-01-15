import * as types from '../constants/ActionTypes';
import restaurants from '../mocks/restaurants.json';

const receiveRestaurants = restaurants => ({
  type: GET_RESTAURANTS,
  payload: restaurants
})

export const getRestaurants = () => dispatch => restaurants;