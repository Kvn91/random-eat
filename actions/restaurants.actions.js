import * as types from '../constants/ActionTypes';
import restaurants from '../mocks/restaurants.json';

const getRestaurantsSuccess = restaurants => ({
  type: types.GET_RESTAURANTS,
  payload: restaurants
})

export const getRestaurants = () => dispatch => dispatch(getRestaurantsSuccess(restaurants));