
// import Actions Types
import {
  SET_USER,
  CLEAR_USER,
} from './userActions';

// Initial State
const initialState = {
  userName: "",
  userImage: ""
}

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case SET_USER + '_FULFILLED': 
          return Object.assign({}, state, action.payload );
      // case SET_USER + '_REJECTED': 
      //     return Object.assign({}, state, initialState, {userName: "cheese"} );
      // if slow you could add a loading screen
      // case SET_USER +'_PENDING': 
      //     return Object.assign({}, state, initialState)
      case CLEAR_USER: 
          return Object.assign({}, initialState );
      default:
          return state;
  }
}