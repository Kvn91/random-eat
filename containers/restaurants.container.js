import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RestaurantsList from '../components/restaurantsList';
import * as Actions from '../actions/restaurants.actions';

let propsMapping = (store) => ({ 
    restaurants: store.restaurants,
});

let dispatchMapping = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});
  
let RestaurantsContainer = connect(
    propsMapping,
    dispatchMapping
)(RestaurantsList)

export default RestaurantsContainer;