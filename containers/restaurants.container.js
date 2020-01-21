import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import RestaurantsList from '../components/restaurantsList';
import RestaurantCard from '../components/restaurantCard';
import * as filters from '../constants/FilterTypes';
import * as actions from '../actions/restaurants.actions';

const propsMapping = (store) => ({ 
    restaurants: store.restaurants.allRestaurants
});

const dispatchMapping = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
  
const RestaurantsContainer = ({ title, restaurants, actions }) => (
  <div>
    <RestaurantsList title={title}>
        {restaurants.map((restaurant, i) => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                onVote={() => actions.voteForARestaurant(restaurant)}
              />
        ))}
    </RestaurantsList>
  </div>
)

RestaurantsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string,
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    voted: PropTypes.bool.isRequired
  })).isRequired
}

export default connect(
    propsMapping,
    dispatchMapping
)(RestaurantsContainer);