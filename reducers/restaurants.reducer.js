export default function RestaurantsReducer(state = [], action) {
  switch (action.type) {
    case GET_RESTAURANTS: 
      return [...state, action.payload];
    default:
      return state;
  }
}