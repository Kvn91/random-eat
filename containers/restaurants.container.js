import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RestaurantsList from '../components/restaurantsList';
import RestaurantCard from '../components/restaurantCard';
import * as Actions from '../actions/restaurants.actions';
import { getFilteredRestaurants } from '../reducers/restaurants.reducer';
import * as filters from '../constants/FilterTypes';

const propsMapping = (store) => ({ 
    restaurants: store.restaurants,
});

const dispatchMapping = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});
  
const RestaurantsContainer = ({ title, filter = '', restaurants }) => {

  let restaurantsToShow;

  switch (filter) {
    case filters.VOTED:
      restaurantsToShow = restaurants[0].filter(r => (r.voted));
      break;
    default:
      restaurantsToShow = restaurants[0];
  }

  return(
    <div>
      <RestaurantsList title={title}>
          {restaurantsToShow.map((restaurant, i) => (
              <li>
                <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
              </li>
          ))}
      </RestaurantsList>
    </div>
  )
}

export default connect(
    propsMapping,
    dispatchMapping
)(RestaurantsContainer);