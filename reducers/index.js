import { combineReducers } from 'redux';
import RestaurantsReducer from './restaurants.reducer';

let reducers = combineReducers({
  restaurants: RestaurantsReducer,
});

export default reducers;