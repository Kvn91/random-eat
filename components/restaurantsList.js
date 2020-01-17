import React from 'react';
import PropTypes from 'prop-types'

const RestaurantsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <ul style={{listStyle: 'none'}} id="restaurantsList">
      {children}
    </ul>
  </div>
)

RestaurantsList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default RestaurantsList;