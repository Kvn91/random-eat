import * as types from '../constants/ActionTypes';

const RestaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_RESTAURANTS: 
      return [...state, action.payload];
    default:
      return state;
  }
}

export default RestaurantsReducer;

export const getFilteredRestaurants = (filter = '', restaurants) => {
  switch (filter) {
    case 'VOTED':
    console.log(restaurants);
      return restaurants.map(product => (product.voted === 'true'));
    default:
      return restaurants;
  }
}