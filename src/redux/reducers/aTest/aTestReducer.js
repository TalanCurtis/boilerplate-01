
// import Actions Types
import {
  UPDATE_ATEST,
} from './aTestActions';

// Initial State
const initialState = {
  testA: "",
  testState: 0,
  aTest: ""
}

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
      case UPDATE_ATEST:
          return Object.assign({}, state, { aTest: action.payload.aTest })
      default:
          return state;
  }
}