
export const userLocationReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_USER_LOCATION':
      return action.location;
    default:
      return state;
  }
}