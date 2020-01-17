import React from 'react';
import RestaurantsContainer from './containers/restaurants.container';

const App = () => (
  <div>
    <RestaurantsContainer title={'Restaurants sélectionnés'} filtre={'VOTED'}/>
    <RestaurantsContainer title={'Voter pour des restaurants'}/>
    <RestaurantsContainer title={'Mettre un veto'}/>
  </div>
)

export default App;