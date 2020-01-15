import * as types from '../constants/ActionTypes';

export default function RestaurantsReducer(state = [], action) {
  switch (action.type) {
    case types.GET_RESTAURANTS: 
      return [...state, action.payload];
    default:
      return state;
  }
}