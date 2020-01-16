import React from 'react';

const RestaurantsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <ul style={{listStyle: 'none'}} id="restaurantsList">
      {children}
    </ul>
  </div>
)

export default RestaurantsList;