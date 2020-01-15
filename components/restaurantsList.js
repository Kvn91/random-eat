import React from 'react';

export default function RestaurantsList(props) {
  const { title, restaurants } = props;
  
  return (
    <div>
      {title}
      <ul style={{listStyle: 'none'}}>
          {restaurants.map((restaurant, i) => (
              <li>
                <p>{restaurant.name}</p>
                <p>{restaurant.description}</p>
              </li>
          ))}
      </ul>
    </div>
  )
}