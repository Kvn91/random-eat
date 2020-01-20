import * as types from '../constants/ActionTypes';
import restaurants from '../mocks/restaurants.json';

const getRestaurantsSuccess = restaurants => ({
  type: types.GET_RESTAURANTS,
  restaurants: restaurants
})

export const getRestaurants = () => dispatch => dispatch(getRestaurantsSuccess(restaurants));

const voteForARestaurantSuccess = restaurantId => ({
  type: types.VOTE_FOR_A_RESTAURANT,
  restaurantId: restaurantId
})

export const voteForARestaurant = (restaurantId) => dispatch => dispatch(voteForARestaurantSuccess(restaurantId));