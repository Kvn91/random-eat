import React from 'react';
import PropTypes from 'prop-types'

const RestaurantsList = ({ title, children }) => (
  <div className="col-md-12">
    <h5>{title}</h5>
    <div className="row" id="restaurantsList">
      {children}
    </div>
  </div>
)

RestaurantsList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default RestaurantsList;