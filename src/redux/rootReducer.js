import { combineReducers } from "redux";
import aTest from "./reducers/aTest/aTestReducer";
import user from "./reducers/user/userReducer";

export default combineReducers({
  aTest,
  user,
});