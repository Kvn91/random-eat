import { combineReducers } from 'redux';
import restaurants from './restaurants.reducer';

let reducers = combineReducers({
  restaurants: restaurants,
});

export default reducers;