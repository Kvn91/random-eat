import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import RestaurantsList from '../components/restaurantsList';
import RestaurantCard from '../components/restaurantCard';
import * as actions from '../actions/restaurants.actions';

const propsMapping = (store) => ({ 
    votedRestaurants: store.restaurants.votedRestaurants
});

const dispatchMapping = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
  
const VotedRestaurantsContainer = ({ votedRestaurants, actions }) => (
  <div>
    <RestaurantsList title={'Restaurants sélectionnés'}>
        {votedRestaurants.map((restaurant, i) => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
              />
        ))}
    </RestaurantsList>
  </div>
)

VotedRestaurantsContainer.propTypes = {
  votedRestaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  actions : PropTypes.arrayOf(PropTypes.func).isRequired
}

export default connect(
    propsMapping,
    dispatchMapping
)(VotedRestaurantsContainer);