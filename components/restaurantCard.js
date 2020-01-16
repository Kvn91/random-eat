import React from 'react';

const RestaurantCard = ({ restaurant }) => (
  <div>
    <p>{restaurant.name}</p>
    <p>Description : {restaurant.description}</p>
  </div>
)

export default RestaurantCard;