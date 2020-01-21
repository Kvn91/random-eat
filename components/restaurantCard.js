import React from 'react';
import PropTypes from 'prop-types'

const RestaurantCard = ({ restaurant, onClickFunction, classes }) => {

  const classes = restaurant.veto ? "veto" : '';

  return (
    <div className={'restaurantCard card' + classes} onClick={onClickFunction}>
      <div className="card-header restaurantName">{restaurant.name}</div>
      <div className="card-body">
        <p><span>Type :</span> {restaurant.type}</p>
        <p><span>Description :</span> {restaurant.description}</p>
      </div>
    </div>
  )
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired
}

export default RestaurantCard;