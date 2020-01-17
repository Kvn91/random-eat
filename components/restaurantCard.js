import React from 'react';
import PropTypes from 'prop-types'

const RestaurantCard = ({ restaurant }) => (
  <div>
    <p>{restaurant.name}</p>
    <p>Description : {restaurant.description}</p>
  </div>
)

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
}

export default RestaurantCard;