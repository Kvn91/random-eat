import React from 'react';
import RestaurantsContainer from './containers/restaurants.container';
import VotedRestaurantsContainer from './containers/votedRestaurants.container';
import * as filters from './constants/FilterTypes';

const App = () => (
  <div>
    <VotedRestaurantsContainer/>
    <hr />
    <RestaurantsContainer 
      title={'Voter pour des restaurants'}
      onClickFunction={'voteForARestaurant'}
    />
  </div>
)

export default App;