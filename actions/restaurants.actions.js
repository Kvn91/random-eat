import * as types from '../constants/ActionTypes';
import restaurants from '../mocks/restaurants.json';

const getRestaurantsSuccess = restaurants => ({
  type: types.GET_RESTAURANTS,
  restaurants: restaurants
})

export const getRestaurants = () => dispatch => dispatch(getRestaurantsSuccess(restaurants));

const voteForARestaurantSuccess = restaurant => ({
  type: types.VOTE_FOR_A_RESTAURANT,
  restaurant: restaurant
})

export const voteForARestaurant = restaurant => dispatch => dispatch(voteForARestaurantSuccess(restaurant));

const vetoARestaurantSuccess = restaurantId => ({
  type: types.VETO_A_RESTAURANT,
  restaurantId: restaurantId
});

export const vetoARestaurant = restaurantId => dispatch => dispatch(vetoARestaurantSuccess(restaurantId));