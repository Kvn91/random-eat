import React from 'react';
import RestaurantsContainer from './containers/restaurants.container';
import * as filters from './constants/FilterTypes';

const App = () => (
  <div>
    <RestaurantsContainer title={'Restaurants sélectionnés'} filter={filters.VOTED}/>
    <hr />
    <RestaurantsContainer title={'Voter pour des restaurants'}/>
    <hr />
    <RestaurantsContainer title={'Mettre un veto'}/>
  </div>
)

export default App;