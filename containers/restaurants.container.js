import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RestaurantsList from '../components/restaurantsList';
import RestaurantCard from '../components/restaurantCard';
import * as Actions from '../actions/restaurants.actions';
import { getFilteredRestaurants } from '../reducers/restaurants.reducer';

const propsMapping = (store) => ({ 
    restaurants: store.restaurants,
});

const dispatchMapping = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});
  
const RestaurantsContainer = ({ title, filter, restaurants }) => {

  const restaurants = getFilteredRestaurants(filter, restaurants);

  return(
    <div>
      <RestaurantsList title={title}>
          {restaurants[0].map((restaurant, i) => (
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